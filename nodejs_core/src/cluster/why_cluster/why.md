This application has two routes:

1. /slow is calling load() which will take five seconds to complete. and this route will return a random string (“I took 5 seconds”).
2. /fast is returning some random string as quickly as possible.

If I load a /slow page, it takes 5 seconds — as expected.
If I load a /fast page, it takes 6 milliseconds — which is almost negligible.

But if I try loading the /slow page first and then immediately try loading the /fast page, how much time will the execution take? Let’s check.
The /fast page took 4.5 seconds instead of the milliseconds it was taking previously.