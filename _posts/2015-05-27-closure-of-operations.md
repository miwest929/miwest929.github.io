---
layout: post
title: "Closure of Operations"
date:   2014-12-21 14:34:25
categories: software development patterns
tags: featured
---

Have you ever heard of the coding pattern called `Closure of Operations`. It was introduced in the seminal book `Domain Driven Design`. I guarentee that you've seen this pattern in the wild but probably never knew its name or what its power is.

The name is derived from the mathematical concept of clossure
  Wikipedia definition:
    A set has closure under an operation if performance of that operation on member of the set
    always produces a member of the same set; in this case we also say that the set is closed under the operation

Here is an example from your early days of arthmetic: the addition operator. Adding any two real numbers always produces a real number. The addition operator is closed under the set of real numbers. A less trivial example. Assume you have the following string of JSON:
{% highlight json %}
  {"first_name":"Dolf","last_name":"Lungdren","favorite_movie":"Gone with the Wind"}
{% endhighlight %}
That JSON is ugly. We want to format it so it can be proccessed by our brains more efficiently. So let's define an operation called `pretty-print`. Given a JSON document, `pretty-print` will transform it it into something easier on the eyes. Like so:
{% highlight json %}
  {
    "first_name": "Dolf",
    "last_name": "Lungdren",
    "favorite_movie": "Gone with the Wind"
  }
{% endhighlight %}

Now, `pretty-print` will always produce a JSON document so we can say that `pretty-print` is closed under the set of all JSON documents.

Here is an example in Javascript:
{% highlight javascript %}
var Point = function(x, y) {
  this.x = x;
  this.y = y;

  this.add = function(pt) {
    return (new Point(this.x + pt.x, this.y + pt.y));
  }

  this.sub = function(pt) {
    return (new Point(this.x - pt.x, this.y - pt.y));
  }

  this.mul = function(multiplier) {
    return (new Point(this.x * multiplier, this.y * multiplier));
  }

  this.div = function(divisor) {
    return (new Point(this.x / divisor, this.y / divisor));
  }

  this.rotate = function(radian) {
    return (new Point(
      Math.cos(radian) * this.x + -Math.sin(radian) * this.y,
      Math.sin(radian) * this.x + Math.cos(radian) * this.y
    ));
  }
}
{% endhighlight %}

Notice how each function in `Point` returns an instance of `Point`. This allows all the functions (operations) in `Point` to be closed under the function `Point`. Simple concept but with powerful consequences. We can now use call chaining:
{% highlight javascript %}
startPt = new Point(0, 0.5);
endPt = new Point(1.0, 0.5);
computedPt = startPt.mul(2).add(endPt).div(3);
{% endhighlight %}

This is one of my favorite patterns. It brings the mathematical property of closures into the world of computing. We are saner because of it.

