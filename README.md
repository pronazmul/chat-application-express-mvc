<h1 align="center"> Express Real Time Chatting Application</h1>

#### Dependencies Used in this Project:

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

#### প্রোজেক্টে ব্যবহৃত ফাংশনালিটি সমূহঃ

- সম্পূর্ণ MVC Pattern ফলো করে SSR (Server Side Rendering) প্রজেক্ট।
- MVC Pattern এর View পার্ট এর জন্য Ejs Templete Engine ব্যবহার করা হয়েছে।
- এপ্লিকেশনটিতে দুইটি রোল রয়েছে user || admin শুধু admin নতুন ইউজার এড/রিমোভ করতে পারবে।
- user শুধু লগিন করতে পারবে এবং লগিন করলেই সে তার কনভারসেশন পেইজে চলে এবং তার এড করা/ তাকে এড করা সকল কনভারসেশনে চ্যাট করতে পারবে।
- user যাবে সে নতুন ইউজারের সাথে কনভারসেশন তৈরী করতে পারবে এর জন্য রয়েছে এডভ্যান্স সার্চ অপশন যেখানে নাম, মোবাইল-নাম্বার, ইমেইল এড্রেস দিয়ে সার্চ করলেই ইউজার খুঁজে পাবে।
- ম্যাসেজ এর পাশাপাশি ইউজার সর্বোচ্চ ২ টি এট্যাচমেন্ট পাঠাতে পারবে। যেটি অবশ্যই ১ MB এর মাধে কোন image হতে হবে।

#### প্রোজেক্টে ব্যবহৃত Techonology সমূহ:

- SSR (Server Side Rendering) Project.
- Nodejs, Expressjs Backend.
- Ejs Templete Engine.
- MongoDB Database.

#### Live link & Login info:

```
user1:{
    username: guest1@gmail.com,
    password: Guest1@01
  }
```
