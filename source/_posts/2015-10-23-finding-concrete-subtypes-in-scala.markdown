---
layout: post
title: "Finding concrete subtypes in Scala"
date: 2015-10-23 19:13
comments: true
categories:
---

On my current project, which is written in Scala, I needed a way to dynamically find all of the concrete subclasses of a given class, found in a given package.

While this is possible using the Scala Reflection API, [this bug](https://issues.scala-lang.org/browse/SI-6573) did not give me confidence that it would work correctly. Instead, I turned to the library mentioned in the comments, namely Reflections, which is written in Java and can be found [here](https://github.com/ronmamo/reflections).

Using this library made the task quite straightforward. In the code below, I'm finding all concrete subclasses of `Attribute[_]` found in the `com.example` package.

``` scala
import java.lang.reflect.Modifier
import org.reflections.Reflections

object Attribute {
  private val reflections = new Reflections("com.example")
  private val allAttributeClasses = reflections.getSubTypesOf(classOf[Attribute[_]])
  private val concreteAttributeClasses = allAttributeClasses filter { klass =>
    !Modifier.isAbstract(klass.getModifiers)
  }

  // do some useful stuff with the list of subclasses
}
```

Note that I'm making use of the standard Java reflection API to check whether a class is concrete or not.

In my next post I'll talk about doing some interesting things with this list of subclasses!
