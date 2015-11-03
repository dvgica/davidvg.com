---
layout: post
title: "Dynamically getting a Scala companion object reference"
date: 2015-11-02 19:42
comments: true
categories:
---

In my last post, I talked about dynamically getting a list of concrete subclasses in Scala. Now suppose that for each of those subclasses (with type `Class[T]`), I need a reference to its companion object.

This time, the standard Scala reflection API did exactly what I needed. The below code takes my list of subclasses, gets a reference to the companion object of each one, and then maps the result of a method on that companion object to the subclass itself.

``` scala
object Attribute {
  // find concreteAttributeClasses up here

  import scala.reflect.runtime.universe

  private val runtimeMirror = universe.runtimeMirror(getClass.getClassLoader)

  implicit val NameClassMap: Map[String, Class[_ <: Attribute[_]]] = (concreteAttributeClasses map { klass =>
    val module = runtimeMirror.staticModule(klass.getName)
    val companionObj = runtimeMirror.reflectModule(module).instance.asInstanceOf[OrgNamed]
    companionObj.orgName -> klass
  }).toMap
}
```

All of the companion objects must inherit the `OrgNamed` trait, so I can safely cast them and call `orgName` on each one.

Why these reflection gymnastics? The resulting `NameClassMap` allowed me to take arbitrary incoming network messages which had an `orgName` matching the keys in my map, and dynamically instantiate an appropriate `Attribute` instance for them. Here's the code to do that:

``` scala
object Attribute {
  // construct implicit NameClassMap up here

  def newFromName(name: String, value: String)
                 (implicit nameClassMap: Map[String, Class[_ <: Attribute[_]]]): Attribute[_] = {
    nameClassMap.get(name) match {
      case Some(klass) =>
        klass.getDeclaredConstructor(classOf[String]).newInstance(value)
      case None =>
        UnknownAttribute(name, value)
    }
  }
}
```

The magic, of course, is the dynamic instantiation provided by `getDeclaredConstructor` and `newInstance`.

I should note that aspects of this decrease the type safety of your code, and should really be used sparingly. In this particular case, the benefits outweighed the risks!
