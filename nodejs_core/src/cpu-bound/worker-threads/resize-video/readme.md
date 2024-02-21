install ffmpeg

brew install ffmpeg

node video-main.js video.mp4 1280x720
Saved video.mp4 to /path-to-video-1280x720.mp4

It uses the concept of a "worker pool" to improve efficiency. Unlike the previous example, this one won't automatically terminate the process after the resize completes. The worker thread is still active and listening for messages, so you'll need to terminate by pressing Ctrl+C in your terminal.