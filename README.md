# Difference between forEach, Map, Filter and Reduce methods in JavaScript
This project is describing the differences between foreach, map, filter and reduce loops in JavaScript

### forEach
The forEach method calls a function for each element in an array. This is useful method to loop through every elements in an array and implement some logic with every array element. This method not return anything and this will not change the original array. For ex :

![Alt text](/images/foreach.PNG?raw=true "Optional Title")

So the result will be undefined, [1,2,3] and 6. Here we have use this method to calculate the total of array elements. Therefore based on the code requirement we can use this method.

### Map
The map method creates a new array from calling a function for every array element. This will return a new array based on the logic in the method. This also not modify the original array. For ex:

![Alt text](/images/map.PNG?raw=true "Optional Title")

The result is [2,4,6] and [1,2,3]. So map method will return new array with modified elements. Here we have used the map method to multiply each array element by 2.

### Filter
The filter method creates a new array filled with elements that pass a test provided by a function. This method is also return a new array with filtered elements. For ex:

![Alt text](/images/filter.PNG?raw=true "Optional Title")

The result will be [3,5] and [1,2,3,5]. Here we have used the filter method to get all the values more than 2. Filter method is use to filter an array items according to the condition.

### Reduce
The reduce method executes a reducer function for array element. This method returns a single value and that is the function's accumulated result. Filter method does not change the original array.

![Alt text](/images/reduce.PNG?raw=true "Optional Title")

Here the output will be 6 and [1,2,3]. We have used this method to calculate the total of array elements. So the filter method is always return a single value. If we want to perform some action the will result one value, we can use this method. Ex (get sum or mul).

### Summary
All of these four methods are use to loop through inside an array elements. We can use these methods to perform actions according to our requirements. Basically the forEach method not return anything but we can implement the function action with individual array elements inside the method. The map method returns a new array with all modified elements according to logic. The filter method is use to filter array elements based on the conditions and this also return new array. Finally the reduce method returns a single value according to method action.

### Get In Touch
Linkedin → https://www.linkedin.com/in/tharaka-udayanga-61a424166/