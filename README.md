# Startup Wallpaper

### Sets your wallpaper to a random image from r/wallpaper

## Installation & Setup

Install `startup-wallpaper` from npm
```cmd
npm install startup-wallpaper
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
