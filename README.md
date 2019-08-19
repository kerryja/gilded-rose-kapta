# gilded-rose-kata-js


This was a fun little project that I used for my first coding challenge. This project was originally built using Ruby but I used JS. The insructions are as follows:

***

Hi and welcome to team Gilded Rose.

As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date.

We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items.

First an introduction to our system:

 - All items have a sell_in value which denotes the number of days we have to sell the item

 - All items have a quality value which denotes how valuable the item is

 - At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

 - Once the sell_in days is less then zero, quality degrades twice as fast

 - The quality of an item is never negative

 - "Aged Brie" actually increases in quality the older it gets

 - The quality of an item is never more than 50

 - "Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality

 - "Backstage passes", like aged brie, increases in quality as it's sell_in value decreases; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

 - "Conjured" items degrade in quality twice as fast as normal items
 
 ***

If I had more time, I would have created more items and run more tests. The thing I struggled with most was trying to figure out how to set the quality with a minimum value of 0 and a max of 50. I am quite happy with how how this turned out and I am looking forward to solving a more difficult challenge next.
