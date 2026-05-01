---
layout: post
title:  "vtkit: text mode boxes, lines colors and plotting with text in c"
date: 2026-05-01
tags: text c tui

---

Its a very simple c library. Draws Boxes, Lines and Text at Arbitrary places on screen. Double Buffered Output so no screen flicker if you want to animate. Detects Resize Events etc.

Clear example code in the [repo](https://github.com/seanbutler/vtkit)  showing how to use the API, its self explanatory though from the function names.

Doesnt enforce a particular way of working. No Main Loop or other Architecture. Bring your own.


* [https://github.com/seanbutler/vtkit](https://github.com/seanbutler/vtkit)


![vtkit Lines Screenshot](/images/Screenshot%20From%202026-04-30%2022-04-38.png)
![vtkit Boxes Screenshot](/images/Screenshot%20From%202026-04-30%2022-05-23.png)



## API

**Session**
- `vtk_begin()` clear screen and hide cursor
- `vtk_end()` show cursor and reset attributes


**Clear & Move**
- `vtk_clear()` clear screen, cursor to 0,0
- `vtk_goto(x, y)` move cursor to column `x`, row `y`


**Color / Cursor**
- `vtk_hide_cursor()` hide cursor
- `vtk_show_cursor()` show cursor
- `vtk_reset()` reset fg/bg to terminal defaults
- `vtk_color(n)` set foreground color (`0..255`)
- `vtk_bg(n)` set background color (`0..255`)

- `VTK_BLACK`, `VTK_RED`, `VTK_GREEN`, `VTK_YELLOW`
- `VTK_BLUE`, `VTK_MAGENTA`, `VTK_CYAN`, `VTK_WHITE`
- Bright variants are provided as macros: `VTK_BRIGHT_BLACK` through `VTK_BRIGHT_WHITE`
- Any explicit color index in `0..255` is accepted for both foreground and background


**IO**
- `vtk_getch()` returns keycode `int` or `-1` if no key pressed
- `vtk_restore_mode()` restore normal terminal input mode
- `vtk_raw_mode()` enable non-blocking single-char input

**Screen Size**
- `vtk_get_width()` current terminal column count (fallback 80)
- `vtk_get_height()` current terminal row count (fallback 24)

**Double Buffer Manip**
- `vtk_buffer_init(width, height)` initialize a generic back/front buffer pair
- `vtk_buffer_free()` release buffer memory
- `vtk_buffer_clear(ch, fg, bg)` fill back buffer
- `vtk_buffer_put(x, y, ch, fg, bg)` write one cell in back buffer
- `vtk_buffer_present()` diff-render back buffer to terminal and update front buffer

**Double Buffer Drawing**
- `vtk_buffer_hline(x, y, len, ch, fg, bg)` draw a horizontal run of cells
- `vtk_buffer_vline(x, y, len, ch, fg, bg)` draw a vertical run of cells
- `vtk_buffer_text(x, y, text, fg, bg)` write a string left-to-right
- `vtk_buffer_rect(x, y, w, h, ch, fg, bg)` fill a rectangle
- `vtk_buffer_line(x, y, dx, dy, ch, fg, bg)` draw a Bresenham line from `(x,y)` to `(x+dx, y+dy)`


Thats It, 
Share and Enjoy!

