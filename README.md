<h1 align="center"> Core Functionalities || Dependencies Used in this project</h1>

### প্রোজেক্টে ব্যবহৃত প্যাকেজ সমূহ :

```
  "dependencies": {
      "bcrypt": "^5.0.1",
      "cookie-parser": "^1.4.5",
      "dotenv": "^10.0.0",
      "ejs": "^3.1.6",
      "express": "^4.17.1",
      "express-validator": "^6.11.1",
      "http-errors": "^1.8.0",
      "jsonwebtoken": "^8.5.1",
      "moment": "^2.29.1",
      "mongoose": "^5.12.13",
      "multer": "^1.4.2",
      "socket.io": "^4.1.2"
  }
```
### প্রোজেক্টে ব্যবহৃত প্যাকেজ সমূহ সম্পর্কে বিস্তারিত:

- সম্পূর্ণ MVC Pattern ফলো করে SSR (Server Side Rendering) প্রজেক্ট।
- MVC Pattern এর beuty টি এচিভ করতে Best Practices গুলি ফলো করে এপ্লিকেশনের Model, View, Controller, Router কে আলাদা ফোল্ডারে স্ট্রাকচারড ভাবে গুছানো হয়েছে।
- Ejs: MVC Pattern এর View পার্ট এর জন্য Ejs Templete Engine ব্যবহার করা হয়েছে।
- jsonwebtoken: Application টিতে রাউটিং Authentication করার জন্য jsonwebtoken নামের একটি প্যাকেজ ব্যবহার করা হয়েছে যেটি ব্যবহার করে Successfully Loggedin ইউজারের প্রয়োজনীয় ডেটা দিয়ে একটি টোকেন তৈরী করে সেটা ব্রাউজারের cookie সেইভ করে রাখা হয়েছে যাতে কাইন্ট থেকে পাঠানো রিকুয়েষ্টে প্রতিবার এটিকে চেক করে রাউটিং Authentication ensure করা হয়েছে।
- cookie-parser: Application টিতে রাউটিং Authentication করা হয়েছে cookie দিয়ে সেজন্য ব্রাউজারের cookie কে রিড করার জন্য cookie-parser নামের একটি প্যাকেজ ব্যবহার করা হয়েছে।
- express-validator: Client সাইড থেকে আসা Request Data গুলি ভ্যালিডেট করার জন্য express-validator নামের একটি ফাংশন ব্যবহার করা হয়েছে। এটি ব্যবহার করে খুবই ইফিশিয়েন্ট ভাবে Request থেকে পাঠানো Data গুলি কে ভ্যালিডেট করে ডেটাবেসে সেইভ করতে পারি।
- bcrypt: ক্লাইন্টের পাসওয়ার্ড কে ডেটাবেসে সিকিউরড encrypt ভাবে সেইভ করে রাখার জন্য bcrypt প্যাকেজটি ব্যবহার করা হয়েছে।
- http-errors: এপ্লিকেশনের error গুলিকে স্টাকচারড ভাবে হ্যান্ডেল করার জন্য প্যাকেজটি ব্যবহার করা হয়েছে।
- dotenv : এপ্লিকেশনের Environment Varriable সেট করে রাখতে dotenv প্যাকেজটি ব্যবহার করা হয়েছে।
- mongoose : এটি মঙ্গোডেটাবেস এর একটি এ্যাডাপটার এর মতো কাজ করে যেটি ব্যবহার করে স্কেলেবল উপারে মঙ্গোডেটাবেস এর সাথে কানেক্ট এবং অপারেশন করতে পারি।
- multer : ক্লাইন্ট থেকে আসা ফাইল কে ভ্যালিডেট করে আপলোড করার জন্য প্যাকেজটি ব্যবহার করা হয়। এই প্রজেক্টে ফাইল এর সাথে req.body হিসেবে আসা ডেটা কেও রিসিভ করে প্রসেস করা হয়েছে।
- moment : এটি জাভাস্ক্রিপ্টের একটি ছোট্ট লাইব্রেরি এটি ব্যবহার করে মঙ্গোডেটাবেস এ থাকা হিভিজিবি দেখতে ডেট-টাইম ফরম্যাট করে দেখানোর জন্য।
- socket.io : ব্রাউজারে সাভারের সাথে সাধারনত http/https protocole যোগাযোগ করি এই প্রোজেক্টে ws(websocket) protocole ব্যবহার করে রিয়েলটাইম চ্যটিং এর বিউটি এ এচিভ করতে পেরেছি।

### [বেসিক এপ্লিকেশন সেটাপ](https://github.com/pronazmul/chat-application-express-mvc/commit/0f1495a7282206a86e1d9871320c947ea0054e5d#diff-bc37d034bad564583790a46f19d807abfe519c5671395fd494d8cce506c42947):

প্রোজেক্টিতে চেষ্টা করেছি রুট ফাইল যতটা ক্লীন রাখা যায় এবং এটাই বেষ্ট প্রাকটিজ। প্রতিটা পেইজের রাউটিং কে আলাদা রাউটারে সাজিয়ে রুট ফাইলে শুধু এক্সপ্রেস এর app.use('/abc', abcRouter) ইন্সট্যান্সে সেট করে দিয়েছি।

এপ্লিকেশনের জন্য প্রায়োজনীয় ডিপেন্ডেন্সিস গুলি এড করে কনফিগার করা, ডেটাবেস কানেকশন দেওয়া, ভিউ ইঞ্জিন সেটাপ করা, Socket কানেক্ট করা, moment সেটাপ করা, এরর হ্যান্ডেলিং মিডলওয়ার গুলি সেটাপ করা এবং সব শেষে এ্যাপ কে লিসেন করা ব্যাস এটুকুই। 

### [Start Script Setup](https://github.com/pronazmul/chat-application-express-mvc/blob/develop/package.json):

এপ্লিকেশনকে ডেভেলপমেন্ট স্টেজে এবং প্রোডাকশন স্টেজে রান করার জন্য নিচের দুইটি স্ক্রিপ্ট ব্যবহার করা হয়েছে।

```
"scripts":{
    "start": "NODE_ENV=development nodemon app.js",
    "prod":"NODE_ENV=production node app.js"
}
```

<h1 align="center">এপ্লিকেশনের কোর ফাংশনালিটি সমূহ</h1>

* এক্সপ্রেস এপ্লিকেশনটি মূলত দুই ধরনের রেসপন্স দেয় একটি হচ্ছে ‍SSR (Server Side Rendering) যেটির মাধ্যমে রেসপন্সে কমম্পিট ওয়েবসাইট রেন্ডারিং হবে এবং পাশাপাশি জেসন রেসপন্স ও দিবে।  
* Error Handling Middleware দিয়ে Error রেসপন্স দেওয়ার সময় কন্ডিশনালি Rendering অথবা জেসন রেসপন্স ও দিবে।
* ইউজারের একাউন্ট তৈরী করার সময় bcrypt প্যাকেজটির মাধ্যমে ডেটাবেসে সিকিউরড encrypt ভাবে পাসওয়ার্ড সেইভ হয়।
* ইউজার লগিন করার সময় পাসওয়ার্ড bcrypt এর মাধ্যমে কমপেয়ার করে দেখবে এবং সাকসেস হলে jwt ব্যবহার করা হয়েছে যেটি ব্যবহার ইউজারের প্রয়োজনীয় ডেটা দিয়ে একটি টোকেন তৈরী করে সেটা ব্রাউজারের cookie সেইভ করে রাখা হয়েছে যাতে কাইন্ট থেকে পাঠানো রিকুয়েষ্টে প্রতিবার এটিকে চেক করে রাউটিং Authentication ensure করা যায়। 
* প্রোটেক্টেড রাউটগুলিতে Authentication Check করার জন্য checkLogin একটি কাস্টম মিডলওয়ার বসিয়ে দেওয়া আছে যেটা কাইন্ট থেকে পাঠানো রিকুয়েষ্টে কুকিজ প্রতিবার এটিকে চেক করে দেখবে যে ক্লাইন্ট অথরাইজড কিনা। 
* সেইম কনসেপ্ট ব্যবহার করে রোল বেইসড রাউটিং checkAdmin কাস্টম মিডলওয়ার এর মাধ্যমে চেক করে দেখতে পারি ইউজার এডমিন কি না। 
* ফাইল আপলোডিং এর ক্ষেত্রে মাল্টার ব্যবহার করে সিঙ্গেল ফাইল/মাল্টিপল ফাইল চেক করে req.body() ডেটাগুলি express-validator দিয়ে চেক করে পরে ডেটাবেস এ স্টোর করা হয়েছে। 
* রেগুলার এক্সপ্রেশন ব্যবহার করে এডভান্সড ফিল্টারিং করা হয়েছে। 

### Important Scripts Can be Re-Used:
* [Basic Project Setup](https://github.com/pronazmul/chat-application-express-mvc/commit/8868e3f48ce4bce469ffdf83711e80190e75144a#diff-02b76ad097626aa9bdb17bafa8349ba6ce878778ddc5db36097d61dcbeb9fb8a)
* [Mongoose User Schema Setup](https://github.com/pronazmul/chat-application-express-mvc/commit/8868e3f48ce4bce469ffdf83711e80190e75144a#diff-02b76ad097626aa9bdb17bafa8349ba6ce878778ddc5db36097d61dcbeb9fb8a)
* [Mongoose Relational Schema Setup](https://github.com/pronazmul/chat-application-express-mvc/commit/3dcbed4aa9cfd51f75961cb18b512f883019c015#diff-6299142beb66cb9e35dd7198caf119f59aa241c4f2f81206660aa9bb4a762875)
* [Multer Single File Uploder Setup](https://github.com/pronazmul/chat-application-express-mvc/commit/09b480c99820a40f15c4f5a20f1792c963137188#diff-faef343e6f12d26a7bc67fdb4af3825ecbe8d4c473d869423c409234e6e79e83)
* [Validate User Using Express Validator](https://github.com/pronazmul/chat-application-express-mvc/commit/59bcec20e4725f48d66afad7ac75f9f21d2dd805#diff-fca9a7b52739dbf7e631a193bcc945c463aac7807ab7b7350b5046d5d825c3a0)
* [Add user to DB generating Hash Password](https://github.com/pronazmul/chat-application-express-mvc/commit/59bcec20e4725f48d66afad7ac75f9f21d2dd805#diff-ef084d73b5eeb973fd3133054fa4b7e6fa1eb0e6ba5f7e74c18c4e1b026959f6)
* [Unlink File From Storage](https://github.com/pronazmul/chat-application-express-mvc/commit/0e2b8ef205fea51ed6fd75b631c16c9d71916d2a#diff-fca9a7b52739dbf7e631a193bcc945c463aac7807ab7b7350b5046d5d825c3a0)
* [Delete User From Mongo & Unlink File From Storage](https://github.com/pronazmul/chat-application-express-mvc/commit/692e1182f03a7718e7eebc32354bca52d79ba9a3#diff-ef084d73b5eeb973fd3133054fa4b7e6fa1eb0e6ba5f7e74c18c4e1b026959f6)
* [Validate User Login Data, User Login, Creating jwt token, Set token in browser as signed Cookie](https://github.com/pronazmul/chat-application-express-mvc/commit/10c7414aed5cd7ddc81864779f4c8e75485ce3fd#diff-dcabf1fe18d0fa6cd619605e444cad53a758daf28a3b6dba45653ea5cd6a9281)
* [Auth Guard Middleware, Prevent Logged in user from login page Redirect to another page, Logout by Clear Cookie](https://github.com/pronazmul/chat-application-express-mvc/commit/e84685552fa461933aaea80413b2c815471bfef5#diff-2b69d0783e0a34964f0a74b1d2b56ca97bef73e7d928c2631599262960ca2c34)
* []()
* []()
* []()
* []()
* []()
