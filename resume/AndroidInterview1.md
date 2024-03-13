# Android Engineer Interview Questions

![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)

### If this Repository helps you, Show your ❤️ by buying me a ☕ below.<br>
<a href="https://www.buymeacoffee.com/ihridoydas" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Need a Mentor? [Click Here](https://topmate.io/ihridoydas)
<img src="https://github.com/ihridoydas/hridoy/blob/master/resume/digitalResume/assets/images/253839418-8fb4b911-28a9-460e-824b-67b06f215d95.svg" width=400 height=80/>


## Contents

* [Kotlin](#kotlin)
* [Android](#android)
* [Lifecycle](#lifecycle)
* [Networking](#networking)
* [Webview](#webview)
* [Dependency Injection](#dependency-injection)
* [Jetpack Compose](#jetpack-compose)
* [Thread](#thread)
* [Architecture](#architecture)
* [System Design](#system-design)
* [Libraries](#libraries)
* [Common Question](#common-question)
* [Questions from Company](#questions-from-company)


## Kotlin
- What is the difference between `const val` and `val`?
- What is so interesting about `data class`?
- Is singleton thread-safe? vs Object?
- What are different type of scope modifiers?
- What are different Coroutine Scope?
- How to manage series and parallel execution?
- Difference between Flow/SharedFlow/StateFlow and elaborate it.
- What happens if we call `.cancel()` from a coroutine scope?
- What is an Init block in Kotlin?
- How to choose between apply and with?
- What is inline function in Kotlin?
- Difference between Coroutine and Java Thread
- Why Coroutines are light weight?
- How does Coroutine switch context?
- 

## Android
 - How does Garbage collection works?
 - What is a dangling pointer?
 - Elaborate Memory Leak?
 - Explain fragment Lifecycle when it comes to ViewPager and sliding between different fragments.
 - Difference between FragmentStateAdapter and FragmentStatePagerAdapter.
 - Difference between Serializable and Parcelable? What are the disadvantages of Serializable?
 - How you could implement observable SharedPrefs or observable Databases i.e. Observe a certain key/table/query?
 - How does layout inflation work from xml tags to view reference in memory?
 - What is a Thread, Handler, Looper and Message Queue?
 - What are the different methods of concurrency on Android? Can you explain the difference between ExecutorService vs CachedThreadPool vs FixedThreadPool vs AsyncTasks vs HandlerThreads?
 - How does `ViewModel` instance provided to Activity and Fragment. How does `ViewModelProviderStore` decide when to retain the instance?
 - How do you inspect and solve Jank issue? [here](https://developer.android.com/studio/profile/jank-detection)
 - How does the OutOfMemory happens? 
 - How do you find memory leaks in Android applications?
 - What is Doze? What about App Standby? 
 - What does `setContentView` do?
 - Process of creating a custom view
 - Deeplink understanding and architecture
 - Notifications
 - 
 
  
### Lifecycle
 - How to keep a video maintain playing state when we rotate screen?
 - How many callbacks in Fragmnets?
 - What could be the reasons when `onPause` didn't get triggered?
 - What kind of events trigger `onPause()` to run?
 - In what scenario does the "onDestory" get called directly after "onCreate"?
 - Which callback gets called on Activity when an AlertDialog is shown?
 - What's the lifecycle in PIP (Picture-in-Picture)?
 - What happens if you rotate the device?
 - Inside a viewpager (Fragment state pager adapter) what will be the lifecycle of the fragments when you swap from tab to another ?
 - Why onActivityCreated is now depreciated in Fragment?
 - Which callback should i use if i want to know when my activity came to foreground?
 - When is onActivityResult called?
 - What does setRetainInstance do and how you can avoid it?
 - What callbacks trigger when a Dialog opens up? Conside both case, dialog attached from same activity/fragment and other activity/fragment.
 - What does `launchWhenCreated`, `launchWhenStarted`, and `launchWhenResumed` functions do?
 - 

### Networking
- What is the role of OkHttp and Retrofit?
- What design pattern does Retrofit use?
- How would optimise handling of access token expiration? How would you handle retry network call when the api fails? (Custom Interceptor response)
- 

### Webview
- What are the problems around security when dealing with `WebView`.
- How to interact or make connections with JavaScript?
- 

### Dependency Injection
- Provides vs binds
- Subcomponent vs component dependency, what is the difference under the hood
- What is subcomponent and what is the use? How do you use qualifiers or how would you provide different instances of a class with the same data type? Constructor Injection V/s Method Injection? What is the scope? Singleton Annotation?
- What is Circular dependency in dagger?, and how to resolve it
- What's interesting about Hilt?
- Did you use Koin? What are your thoughts on it?
- 

### Jetpack Compose
- How to launch coroutine from a composable function? - [LaunchedEffect](https://www.droidcon.com/2021/10/28/jetpack-compose-side-effects-ii-remembercoroutinescope/)
- How to launch coroutine from a non-composable function, but tied to composition? - [rememberCoroutineScope()](https://www.droidcon.com/2021/10/28/jetpack-compose-side-effects-ii-remembercoroutinescope/)
- What is recomposition? [Recomposition](https://developer.android.com/jetpack/compose/mental-model#recomposition)
- **What is `remember` in compose?**
  - A composable function to remember the value produced by a calculation only at the time of composition. It will not calculate again in recomposition.
  - Recomposition will always return the value produced by composition.
  - Whole Compose is based on concept of `Positional Memoization`
  - At the time of recomosition, `remember` internally calls a function called `rememberedValue()` whose work is to look into the `slotTable` and compare if the previous value and the new value has any difference, if not return, else update value
- Why and when to use `remember {}`?
- Difference between `LazyColumn` and `RecyclerView`?
- What is AndroidView in compose?
- What is the lifecycle of composeables? [Lifecycle](https://developer.android.com/jetpack/compose/lifecycle)
- How to avoid recomposition of any composable, if the state is not changed? [Smart Recomposition](https://developer.android.com/jetpack/compose/lifecycle#add-info-smart-recomposition)
- What are stable types which can skip recomposition?
- What is State?
- What is MutableState and how does recomposition happens?
- How to retain State accross recomposition and configuration changes?
- Difference between Stateless and Statefull composeables?
- What are your thoughts on flat heirarchy, constraint Layout in compose vs the older view heirarchy in xml
- Difference b/w remember and LaunchedEffect
- Does re-composition of `ComposeItem1` bring any affect on `ComposeItem2`? If yes, then how? 
  - `ComposeParent() { ComposeItem1 {} ComposeItem2() {...} } `
  - What is `CompositionLocal`?
- Custom views in compose
- Canvas in Compose
- 

## Thread
 - Different type of threads?
 - Difference between different type of thread?
 - Thread <-> Handler <-> looper
 - UI vs Background Thread
 - 
 
## Architecture
 - What is SOLID principles?
 - What is MVVM?
 - Brief about Android Architecture.
 - 

## System Design
 - Design Image Loading Library
 - Design Image Downloading Library
 - Design LRU Cache
 - Design a real-time Twitter feed timeline. How will you structure the backend? Will you use WebSocket or REST for this use case? Justify. 
 - Design Networking Library
 - Design Checkout Screen
 - Design Error handling Structure
 - REST <-> Web Sockets
 - Implement caching mechanism
 - 
 
## Libraries
 - How Glide internally works?
 - Hoe does retrofit workss internally?
 - ViewModel internal working
 - 
 

## Common Question
 - `String` vs `StringBuilder`
 - `==` vs `.equals`?
 - `===` vs `==`?
 - Java OOP concepts

## Java ☕️
 - What is the diff between encapsulation & abstraction (practical example) — [Check here](https://www.javatpoint.com/abstraction-vs-encapsulation-in-java#:~:text=Abstraction%20is%20a%20feature%20of,issue%20at%20the%20design%20level.)
 - HashMaps vs HashTables — [Check here](https://www.geeksforgeeks.org/differences-between-hashmap-and-hashtable-in-java/)
 - When to use array & ArrayList — [Check here](https://www.javatpoint.com/difference-between-array-and-arraylist)
 - What is the volatile keyword — [Check here](https://www.javatpoint.com/volatile-keyword-in-java#:~:text=Volatile%20keyword%20is%20used%20to,with%20primitive%20type%20or%20objects.)
 - What is the transient keyword — [Check here](https://www.javatpoint.com/transient-keyword)
 - What is a diff between a string buffer & string builder — [Check here](https://www.digitalocean.com/community/tutorials/string-vs-stringbuffer-vs-stringbuilder)
 - Why is string immutable — [Check here](https://www.digitalocean.com/community/tutorials/string-vs-stringbuffer-vs-stringbuilder)
 - Explain multithreading. How two threads pass messages internally — [Handler](https://developer.android.com/reference/android/os/Handler#:~:text=A%20Handler%20allows%20you%20to,is%20bound%20to%20a%20Looper%20.)
 - class A -> extends class B, implements interface C. Both have the same method fun add() {}, Which one will be implemented in class A?
[Try yourself](https://pl.kotl.in/fRTo80wWr)
 - What is the difference between String test = new String(“X”) & String test = “X”. Explain String constant pool & String literal — [Check here](https://www.javatpoint.com/string-pool-in-java)
## Android
 - When I am in my activity onResume() & get a phone call what will be the lifecycle of the fragment inside my activity — [Try yourself](https://pl.kotl.in/fRTo80wWr)
 - Explain context & applicationContext, also a practical example — [Check here](https://www.geeksforgeeks.org/what-is-context-in-android/#:~:text=Both%20the%20Activity%20and%20Application,both%20extend%20the%20Context%20class.)
 - what is the difference between ViewModel and AndroidViewModel — [Check here](https://stackoverflow.com/questions/44148966/androidviewmodel-vs-viewmodel)
 - what is the diff between MVP & MVVM — [Check here](https://blog.mindorks.com/mvc-mvp-mvvm-architecture-in-android)
 - Tell me any method of broadcast receiver except onReceive() — [Check here](https://developer.android.com/reference/android/content/BroadcastReceiver#summary)
 - How Broadcast receiver is used for the network (WIFI) changes — [Check here](https://www.geeksforgeeks.org/broadcast-receiver-in-android-with-example/)
 - Type of services in Android — [Check here](https://www.geeksforgeeks.org/services-in-android-with-example/)
 - Is the Intent service run on background or main thread — [Check here](https://stackoverflow.com/a/15772151/14241355)
 - Explain FCM foreground & background notifications — [Check here](https://firebase.google.com/docs/cloud-messaging/android/receive)
 - Design patterns in Android — [Check here](https://blog.mindorks.com/mastering-design-patterns-in-android-with-kotlin)
 - What do you think about NavHost in navigation? — [Check here](https://developer.android.com/guide/navigation/navigation-getting-started#add-navhost)
 - Explain database management using SQLite, Room & Realm — [Check here](https://medium.com/bitrise/realm-vs-sqlite-which-database-is-better-for-android-apps-c751dc8b150c)
 - What is a foreign key in Room DB? Why do we use it? — [Check here](https://stackoverflow.com/a/56707343/14241355)
 - What is doze mode, and when is it introduced? — [Check here](https://medium.com/mindorks/you-have-to-know-more-about-doze-mode-3d80f016f8ad)
 - what is ADB, can you tell me any commands? — [Cheatsheet](https://devhints.io/adb)
 - what is linting in Android — [Check here](https://blog.mindorks.com/what-is-lint-what-is-it-used-for)
 - What is Rxjava, and how it works? — [Check here](https://blog.mindorks.com/rxjava-for-android-rxandroid)
 - What are SOLID principles? — [Check here](https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/)
 - Have you worked with any other hardware systems? (i.e. I have worked with Clover POS system)
 - What is KMM? — [Check here](https://kotlinlang.org/docs/multiplatform.html)
## Kotlin
 - What are the benefits of Kotlin over Java
 - Explain the use of lateinit & lazy keywords
 - In any class we have a member variable or function, so how can we make a getter setter of that variable?
 - What is MVVM, and how does it work? what is the use of Live data?
 - What is null safety in Kotlin?
 - What is the diff between Var & Val
 - What is Elvis operator?
 - What is Flow API in Kotlin — [Check here](https://developer.android.com/kotlin/flow)
 - Explain coroutines in kotlin
 - What are scoped functions in kotlin
 - How can you declare a singleton class
 - what is the diff between companion obj & object
 - used extension functions? example
 - what is the diff between static & singleton > Singleton has an instance/object while static class is a bunch of static methods.
 - what is constant
 - Explain @jvmstatic @jvmoverloads @jvmfiled
 - You can get most of the Kotlin answers here:
 - https://blog.mindorks.com/kotlin-android-interview-questions

## Jetpack Compose 🚀
 - What are the benefits of using Jetpack compose?
 - What is a Composable function?
 - What is a declarative approach?
 - What jetpack compose libraries have you used?
 - Explain compose UI basic components
 - Jetpack compose blogs with Github examples: Jetpack Composers

## Testing 🐛
 - In Unit testing, what is @Before & @Beforeclass annotation used for — [Check here](https://www.baeldung.com/junit-before-beforeclass-beforeeach-beforeall)
 - Why should we use a [Mockito](https://blog.mindorks.com/using-mockito-in-android-unit-testing-as-a-pro) lib?
 - Explain [Unit](https://developer.android.com/training/testing/local-tests) & [Instrumentation](https://developer.android.com/training/testing/instrumented-tests) tests
 - Espresso Testing Library: [Espresso UI Testing for Intents](https://medium.com/@mansikothari115/espresso-ui-testing-for-intents-in-android-a81660e8e93)

## Data Structure
 - The time complexity of Hash Table — O(1)
 - Best for getting the last item — Stack
 - Time Complexity of Binary Search — O(log N)
 - Which is best Sorting Algo — Quick Sort
 - Best performance for finding minimum value — Array
## Others
 - If you have 5+ years of experience, it’s recommended to prepare for this section.

 - Explain one of your challenging/exciting/recent project
 - VCS — Git — PR review process, CI/CD process
 - Explain deep linking
## About NDK, c++
 - What other languages do you know apart from Kotlin?
 - Explain the architecture of the communication application, and what data security measures you take while developing.
 - How do you keep up to date yourself with the latest development?
 - Any contribution to the community? Git, StackOverflow

## You can get most of the Kotlin answers here:
```
https://blog.mindorks.com/kotlin-android-interview-questions
```
 
## Questions from Company
| Company | Questions |
|  --- | --- |
| Booking.com | <ul><li>Implement findViewById method</li> <li>Given a list of words as input, output another list of strings, each containing words that are mutual anagrams</li> <li>Identify whether four sides (given by four integers) can form a square, a rectangle or neither</li> <li>Output a delta encoding for the sequence. In a delta encoding, the first element is reproduced as-is. Each subsequent element is represented as the numeric difference from the element before it</li> <li>Three integer arrays are given with duplicate numbers. Find the common elements among three arrays</li> <li>Twisted question related to ConcurrentModificationException in an ArrayList</li> <li>How do you implement a hotel list and detail screen. Discuss what all APIs You will create how the layout will be </li> <li>Fragments & their lifecycle, Activity lifecycle, Views, Layouts </li> <li> Background task in Android - Asynctask, service, intent services etc </li> <li> Given dates and number of check-in and check-out on those dates. Find the busiest day of the hotel. [Merge Array interval type question]</li> <li> given an array, determine if there are repeated elements. If an element is repeated more than 3 times, return those elements. This question is basically doing a hash and checking if the hash already exists. Someone used a Map and a Set. </li> <li> Given an list of positive words, negative words and a review, determine if the review is flagged as positive, negative or neutral. Someone solved it using a Set. Someone just needed to do some count (+ or -) regarding on where the word appeard (positive list or negative). </li> </ul>| 
| Spotify | <ul> <li> Design components and overall architecture for a Search feature in an Android application. [Spotify - Android Engineer II - London, UK - Sep 2022] </li> <li> Design a Disk based Cache for client. [Spotify System Design Android/iOS Client] `Platform independent, Key will be 32 bytes, Value can be anything but in Byte array, Cache should be persistent, Cache should max hold 100k+ Objects, Cache Max size should be configurable ( Max Size : 10 MB upto 1GB), Cache should be opaque, Cache should be Secure` </li> <li>[Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) </li> <li> [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) </li></ul>|
| PhonePe | <ul> <li> Minimum Meetroom scheduling </li> <li> Anagram Strings based question </li></ul> |
| Paytm | <ul> <li> To check if strings are rotations of each other or not. And if they are in rotation print the no. of rotations. </li> <li> Find the string is panagram or not </li> <li>Design components and overall architecture for a Search feature in an Android application</li> <li> Sort an array of 0s, 1s and 2s </li> <li> Abstract vs Interface </li> <li> Android Memory related </li></ul> |
| Meesho | <ul> <li> SOLID principles </li> <li> Dagger, why use dependency injection, what if we do not think it is important, like alternatives. How to create our own dependency injection library. </li> <li> why use MVVM over MVP, think outside the box, we could have used observables using RxJava etc. - open ended questions around it </li> <li> Multi Module benefits and why use it</li> <li> How to handle dependencies or abstraction in multi module </li> <li> val vs const </li> <li> inline keyword </li> <li> lateinit vs lazy </li> </ul>|


------

## Kotlin Online Quiz ❔
[https://kotlinquiz.com/](https://kotlinquiz.com/)
[https://developer.android.com/s/results/?q=quiz](https://developer.android.com/s/results/?q=quiz)

## Codelabs
[https://developer.android.com/courses/](https://developer.android.com/courses/)

## Contributing Guidelines
What interesting questions you had faced while giving interview for Android Engineer role (any level)? Let's open a PR.

## If this repository helps you in anyway, show your love :heart: by putting a :star: on this project :v:
