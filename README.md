# Startup Wallpaper

### Sets your wallpaper to a random image from r/wallpaper

## Installation & Setup

Install `startup-wallpaper` from Github
```cmd
git clone https://github.com/IgorZimmermann/startup-wallpaper
```

```cmd
cd startup-wallpaper-master
```

```cmd
npm install
```

Install `pm2` from npm
```cmd
npm install -g pm2
```
---

**Windows only**
```cmd
npm install -g pm2-windows-startup
```

```cmd
pm2-startup install
```

---

Start app with PM2
```cmd
pm2 start index.js --name startupWallpaper
```

```cmd
pm2 save
```

## Configuration

```js
// config.json
{
  "resolution": // 1920x1080 or 2560x1600 or 3840x2160,
  "sort": // top or relevance,
  "time": // all or month or week or day
}
```
