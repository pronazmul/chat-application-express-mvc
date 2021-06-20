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

### [বেসিক এপ্লিকেশন সেটাপ](https://github.com/pronazmul/chat-application-express-mvc/blob/develop/app.js):

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
