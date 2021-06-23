---
layout: post
title:  "templates and code duplication in c++"
date:   2021-06-20 09:00:00 -0100
keywords: a important side effect of templates in c++
---


<em>td;dr: may c++ programmers have heard that templates cause code bloat and that you should think carefully about them. but have you looked at exactly what they are doing? compiler explorer is awesome.</em>


## introduction

here is a super handy templated function which none of us really need but serves the purposes of a tutorial.

using two template types T and U its the definition of a generic addition function. redundant in c++ but it could be doing more complex things in a real context.

```cpp

template<typename T, typename U>
auto add(T x, U y){
    return x + y;
}

```

calling it with a couple of integers like so...

```cpp

int  main(){
    auto SUM1 = add(1, 1);
    return 1;
}

```
generates the following assembler. where you can see we have a main function and an add function which takes two ints as parameters and returns their sum. even if the assembly is opaque to you the labels show the structure clearly enough as they mimic the c++ code which generated them.

just remember: call, jumps to a func, ret, returns a value and  mov is used all over to move/copy values as a prep for maths.

```assembly

auto add<int, int>(int, int):
        push    rbp
        mov     rbp, rsp
        mov     DWORD PTR [rbp-4], edi
        mov     DWORD PTR [rbp-8], esi
        mov     edx, DWORD PTR [rbp-4]
        mov     eax, DWORD PTR [rbp-8]
        add     eax, edx
        pop     rbp
        ret
main:
        push    rbp
        mov     rbp, rsp
        sub     rsp, 16
        mov     esi, 1
        mov     edi, 1
        call    auto add<int, int>(int, int)
        mov     DWORD PTR [rbp-4], eax
        mov     eax, 1
        leave
        ret

```


now, lets keep the template function but call it a couple more times with new parameters of a different type. 


```cpp

int  main(){
    auto SUM1 = add(1, 1);
    auto SUM2 = add(1.1, 1);
    auto SUM3 = add(1.1, 1.2);
    return 1;
}

```

now the parameters are now an assortment of ints, and doubles, the compiler generates new code for each additional unique calling signature type.


```assembly

auto add<int, int>(int, int):
        push    rbp
        mov     rbp, rsp
        mov     DWORD PTR [rbp-4], edi
        mov     DWORD PTR [rbp-8], esi
        mov     edx, DWORD PTR [rbp-4]
        mov     eax, DWORD PTR [rbp-8]
        add     eax, edx
        pop     rbp
        ret
auto add<double, int>(double, int):
        push    rbp
        mov     rbp, rsp
        movsd   QWORD PTR [rbp-8], xmm0
        mov     DWORD PTR [rbp-12], edi
        pxor    xmm0, xmm0
        cvtsi2sd        xmm0, DWORD PTR [rbp-12]
        addsd   xmm0, QWORD PTR [rbp-8]
        movq    rax, xmm0
        movq    xmm0, rax
        pop     rbp
        ret
auto add<double, double>(double, double):
        push    rbp
        mov     rbp, rsp
        movsd   QWORD PTR [rbp-8], xmm0
        movsd   QWORD PTR [rbp-16], xmm1
        movsd   xmm0, QWORD PTR [rbp-8]
        addsd   xmm0, QWORD PTR [rbp-16]
        movq    rax, xmm0
        movq    xmm0, rax
        pop     rbp
        ret
main:
        push    rbp
        mov     rbp, rsp
        sub     rsp, 32
        mov     esi, 1
        mov     edi, 1
        call    auto add<int, int>(int, int)
        mov     DWORD PTR [rbp-4], eax
        mov     rax, QWORD PTR .LC0[rip]
        mov     edi, 1
        movq    xmm0, rax
        call    auto add<double, int>(double, int)
        movq    rax, xmm0
        mov     QWORD PTR [rbp-16], rax
        movsd   xmm0, QWORD PTR .LC1[rip]
        mov     rax, QWORD PTR .LC0[rip]
        movapd  xmm1, xmm0
        movq    xmm0, rax
        call    auto add<double, double>(double, double)
        movq    rax, xmm0
        mov     QWORD PTR [rbp-24], rax
        mov     eax, 1
        leave
        ret
.LC0:
        .long   -1717986918
        .long   1072798105
.LC1:
        .long   858993459
        .long   1072902963



```

this code us much longer. even if you discout the constants stored as data at the end. further investigation is needed if to see what happens if we use templates over class hierarchies.

## Conclusion

Just because the code is longer that doesnt mean its a problem. Go to the wonderful Compiler Explorer here:

https://godbolt.org/

Type in your own code and see what the compiler of your choosing is producing. This is not a substitute for profiling but it can give you insights into what your code is really doing.

Good Luck.
Any questions, message me. Am happy to help.