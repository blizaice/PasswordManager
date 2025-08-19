> [!IMPORTANT]
> ・This is not an actual app! Will run only in Code Editors like: [Visual Studio - Desktop](<https://code.visualstudio.com/Download>), [Spck Editor - Android](<https://play.google.com/store/apps/details?id=io.spck>) & [Spck Editor - iOS](<https://apps.apple.com/us/app/spck-editor/id1507309511>)

> [!CAUTION]
> ・All your Passwords & Secrets (2FA Tokens) are stored in a single unencrypted `json` file <br>
> ・Keep it safely, like an External SSD, USB Stick or a Second Device <br>
> ・If you really want to store it in Cloud, use a file archiver to `zip` with a `PASSWORD`

#### What's This?
A simple local "hosted" alternative to Google Password Manager & Authenticator, without autocomplete or passkeys

#### Why would i want to use this?
Any service (including Google) can ban your account, sometimes out of no where. It's nice to have all your accounts stored in multiple places, or out of the Cloud :)

### How to use?
Just check the `json` file, you'll figure out! :D<br>
Here's an example of account: <br>
(fake credentials)
```json
{
"Name": "Main Account",
"Website": "cloudflare.com",
"Email": "me@blizaice.net",
"Note": "Backup Email: personal@blizaice.net",
"Secret": "427226BB42IQT5OBW3XYZRHYYNFJEMD4",
"Password": "V(8Vqm_6nG!bUa_Y23VOgcW*g29H4|d:(KvTHH0];hr:Yr1Xs7PSOal;6Rtj1RCe^jd^UCf>5]_Dk[kg3a*TSpF?|WIz>rt]_%9J]%1tRBUo81H8RF.K|M[t(VLIz}ZCztbfZcKXSR^l}++:VXeroV8mLuG@l;_m,sZ.Xl0^3+oRHApM3$3[6I96p%[p,CY2KdFB*NS>"
}
```
> [!NOTE]
> ・Only `Website` is required, others are optional <br>
> ・Some backend code mayyy be written in Romanian 🇷🇴 :) <br>
> ・Images (Logos) are loaded from `/Images` using the `Website` value + `.png`: `google.com.png`. If no image is found, it will try fetching it's `favicon.ico`, in the end displaying `/Images/Default.png` (Placeholder)

### Screenshots
<img width="200" src="https://github.com/user-attachments/assets/d5da2f8a-b233-4cb9-92d2-277a64eeb717">
<img width="200" src="https://github.com/user-attachments/assets/6c834da9-47e1-4b77-a059-7000a5723d29">
<img width="200" src="https://github.com/user-attachments/assets/2567e447-1674-432e-a351-d923f75b69a9">