---
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: SRRQR
info: |
  ## Slidev Starter Template
  Strong Rank Revealing QR factorization.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center py-6
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
math: true
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
---


<div class="heading"> SRRQR </div>

A Presentation 


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---


## What's the need?


<div class="answer" v-click="1">
We know SVD represents the <span style="color: goldenrod; font-weight: bold;">gold-standard</span> in the area of rank-determination. Nothing "takes apart" a matrix so conclusively as the SVD. <em>(Golub, 5.4)</em>.
</div>

<div class="answer" v-click="2">
We know that QR is a much more efficient operation compared to SVD.
</div>

<div v-click="3" class="answer">
<span  v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 1500, easing: 'ease-in-out' } }"><em>Imagine</em></span></div>
<div class="answer" v-click="4"> if it can also produce rank.
</div>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->


---


## Why do we care about rank?
<br>

<div class="answer" style="text-align-last:left; margin:1rem">

$Least-Squares$

$Subset \ Selection$

$Linear \ Dependency \ Analysis$

$etc...$
</div>

<br>

<div class="answer" v-click>The first algorithm that utilizes QR and produces a rank was introduced by Golub, with Bussinger  (1965)</div>

---
layout: fact
class: px-30
---

Given a matrix $M \in R^{m X n}$ with $m \geq n$, we consider a QR factorisation of the form: 

<span style="color: goldenrod; font-weight: bold; font-size:2rem">$M\Pi = QR = Q\begin{pmatrix} A_k & B_k \\ 0 & C_k \end{pmatrix}$.</span>

Also, assume that the $\sigma_i(M)$ of M are arranged in decreasing order:

$\sigma_1(M) \geq \sigma_2(M) \geq \sigma_3(M) ... \sigma_n(M)$
<br>
<br>
<br>
<br>
<v-click> 

It's **QR With Column Pivoting**. You must've already seen this in class.


</v-click>


---


## Algorithm 1. QR with column pivoting
<br>
<div class="katex-block">
$$
\begin{array}{ll}
k := 0;\quad R := M;\quad \Pi := I; \\[0.5em]
\textbf{while } \max_{1 \le j \le n - k} \gamma_j\big(C_k(R)\big) \ge \delta \ \textbf{do} \\[0.5em]
\quad j_{\text{max}} := \arg\max_{1 \le j \le n - k} \gamma_j\big(C_k(R)\big); \\[0.5em]
\quad k := k + 1; \\[0.5em]
\quad \text{Compute } R := \mathcal{R}_k\big(R \, \Pi_{k, \ k + j_{\text{max}} - 1}\big)\ \text{ and } \ \Pi := \Pi \, \Pi_{k, \ k + j_{\text{max}} - 1}; \\[0.5em]
\textbf{endfor;}
\end{array}
$$
</div>

---
# layout: center
clicks: 5
---

# Dry-Run of QRCP

<GoodQrcp :steps="$slidev.nav.clicks" />

<h2> Permutation Indices </h2>
<v-switch>
  <template #0>
    <pre class="perm-line text-xl">                1          2           3           4          5</pre>
  </template>
  <template #1>
    <pre class="perm-line text-xl">                <span style="color: red">5</span>          2           3           4          <span style="color: red">1</span></pre>
  </template>
  <template #2>
    <pre class="perm-line text-xl">                5          2           3           4          1</pre>
  </template>
  <template #3>
    <pre class="perm-line text-xl">                5          <span style="color: red">3</span>           <span style="color: red">2</span>           4          1</pre>
  </template>
  <template #4>
    <pre class="perm-line text-xl">                5          3           2           4          1</pre>
  </template>
  <template #5>
    <pre class="perm-line text-xl">                5          3           2           4          1</pre>
  </template>
</v-switch>

---


## Why are we doing this pivoting?

<br>
<div v-click class="answer">
To gather the well-conditioned columns in the left-bucket and the rest on the right bucket. Once concluded, the number of columns in the left-bucket is the rank of the matrix.
</div>


---

## What do we mean by gathering the well-conditioned columns in the left? 
<br>
<div v-click class="answer">

It means that we're trying to greedily maximise of determinant of $A_k$
</div>

---
clicks: 3
---

## Why do we want to maximise the $det(A_k)$?
<v-switch>
<template #1>
<div class="answer">
**************
Therefore, it suffices to maximise the determinant because it is a product of singular values.
We know that the determinant because it is a product of singular values.
</div>
</template>

<template #2>
<div class="answer">

Assume that $k$ is a given integer such that $1 \leq k \lt n$ and $\sigma_k(M) > 0$. If $\sigma_(M)$ and $\sigma_{k+1}(M)$ are *well-separated*, and $\sigma_{k+1}(M)$ is small, of $O(\epsilon)$, then $k$ is considered the <span style="color: goldenrod; font-size:2rem">*Numerical Rank*</span>. 

Therefore the RRQR problem can be precisely formulated as:
</div>
</template>

<template #3>
<div class="answer">

$$ \max_{\pi}\sigma_{\min}(A_k) \tag{1}$$
$$ \min_{\pi}\sigma_{\max}(C_k) \tag{2}$$
$$ \text{Or Solving Both} $$
</div>
</template>

</v-switch>


---

$$
\left[
\begin{array}{cccc:cccc}
a_{11} & a_{12} & \cdots & \cdots & \cdots & a_{1,n-1} & a_{1,n} \\[0.5em]
0 & a_{22} & \cdots & \cdots & \cdots \\
\vdots & \vdots & \ddots\\
\vdots & \vdots &  & a_{kk} \\[0.5em]
\hdashline
\vdots & \vdots & \cdots & \cdots & a_{k+1,k+1} \\
\vdots & \vdots & \cdots & \cdots &\ \ \ \ \ \ \ \ \ \ddots \\
\vdots & \vdots & \cdots & \cdots & \cdots &  a_{n-1,n-1} \\[0.5em]
0 & \cdots & \cdots & \cdots & \cdots & 0 & a_{n,n}
\end{array}
\right]
$$


---

## **Low Rank Approximation**:
<br>

<div class="answer-small">

  1. *SVD* : If you want Rank-K approximation, take $\sum_{i=1}^{k}\sigma_i u_i v_i^T$
   <br><br>

  2. *RRQR* : $||A - Q_{m \times k} \begin{bmatrix} A_k & B_k \end{bmatrix} \Pi^T||_2 = ||C_k||_2$ 
</div>
<br>
<div class="highlighted-question">

*Another way to think about why do we want to maximize* $det(A_k)$ *and equivalently minimise $det(C_k)$?*
</div>
<div class="answer-small">

Because we seek to minimise the error $||C_k||_2$
</div>

---

## **Why do we want to find the column with maximum norm in $C_k$ and bring it to the 1st bucket?** 
<br>

Because, we can prove 
$$ \sigma_{\max}(C_k(M\Pi)) \leq \sqrt{n-k} \max_{1 \leq j \leq n-k} \gamma_j(C_k(M\Pi)) \leq \sqrt{n-k} \space \delta $$

If $\delta$ is small, then the numerical rank is atmost $k$ and our objective is acheived.

---
layout: image-left
image: public/face_comparison.png
backgroundSize: contain
---

# Image Reconstruction using PCA and RRQR
<br>

## _k_ = 50 and _k_ = 200 

---
layout: image
image: public/error_vs_time.png
backgroundSize: 90%
---

# Reconstruction Error & Time vs K

---
layout: image
image: public/logistic.png
backgroundSize: 55%
---

# Post-50, Keep it Simple!

---

# A Dumb Face Detector
<Camera />

---


## **RRQR Conditions**: 
<br>
<div class="text-xl">

$$ \sigma_{\min}(A_k) \geq \frac{\sigma_k(M)}{p(k,n)} \tag{1} $$
$$ \sigma_{\max}(C_k) \leq \sigma_{k+1}(M) \space p(k,n) \tag{2} $$
</div>

<div class="description">

where $p(k,n)$ is a function bounded by a low-degree polynomial in $k$ & $n$.

An Algorithm is called RRQR if it satisfied both conditions.
</div>

## **Our Interpretation**: 

<div class="description">

We know that $\sigma_{\min}(A_k) \leq \sigma_k(M)$ and $\sigma_{\max}(C_k) \geq \sigma_{k+1}(M)$. The RRQR Conditions additionally wants the the singular values to be close.
</div>


---
class: py-20
---

<div class="text-2xl">
Essentially, QRCP, which is a greedy algorithm, as defined by Golub, is an approximation of another Greedy Algorithm which solves Problem-I.
</div>

<br><br><br><br>

<v-click>
<div style="font-size: 3rem; text-align-last: center; color: #2B90B6; font-family: Helvetica Neue; text-transform: uppercase;">

**What is that Greedy Algorithm?**
</div>  
</v-click>

---
class: py-6
---

## Alogrithm Greedy-I

<div class="katex-block">

$$ {all|7}
\begin{array}{l}
R^{(0)} = R \\[0.5em]

\textbf{For } l = 0 \text{ to } k - 1 \text{ do:} \\[0.5em]


\text{Set} \\ \quad
\begin{array}{cc}
& \begin{array}{cc} \ \ \ l & n - l \end{array} \\
\begin{array}{c} l \\ n - l \end{array} &
\left( \begin{array}{cc}
A & B \\
C &
\end{array} \right)
\end{array}
= \ \  R^{(l)} \\[1.9em] 

\text{Denote the columns of } B \text{ and } C \text{ by } b_i = B e_i \ \ and \ \ c_i = C e_i \\[0.7em]

\quad\quad 1. \ \text{Find the next column } l + j \text{ of } R^{(l)} \text{ such that:} \\[0.5em]

\quad\quad\quad \max_{1 \leq i \leq n - l} \, \sigma_{\min} 
\begin{pmatrix}
A & b_i \\
  & c_i
\end{pmatrix}
= \sigma_{\min}
\begin{pmatrix}
A & b_j \\
  & c_j
\end{pmatrix} \\[1.2em]

\quad\quad 2. \ \text{Exchange columns } l+1 \text{ and } l+j \text{ of } R^{(l)}, \text{ and retriangularize from the left} \\[0.5em]
\quad\quad\quad \text{with orthogonal transformations to get } R^{(l+1)}
\end{array}
$$
</div>


---

Now, the pertinent question, 
## **Why is Norm a good-approximation to Singular Value?** 

<div class="answer">
Because this is true: 

<br>

$$
\frac{\alpha_{l+1}}{\sqrt{n - l}} \leq \gamma_j \leq \alpha_{l+1}, \quad 
\alpha_{l+1} = \max_{1 \leq i \leq n - l} \gamma_i
$$
</div>


---

Since, it's an approximation, you can cook-up an example, where it fails, and here it is.

## Introducing the Kahan Matrix 
<br>

$$
\begin{align*}
& \text{Let} \ M \ = \ S_nK_n \\\\
S_n &= 
\begin{pmatrix}
1 & 0 & \cdots & 0 \\
0 & \varsigma & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \cdots & 0 & \varsigma^{n-1}
\end{pmatrix},
\quad
K_n = 
\begin{pmatrix}
1 & -\varphi & \cdots & -\varphi \\
0 & 1 & \ddots & \vdots \\
\vdots & \ddots & \ddots & -\varphi \\
0 & \cdots & 0 & 1
\end{pmatrix} \\\\
& \text{with} \ \ \varphi , \varsigma > 0 \ \
\text{and} \ \ \varphi^2 + \varsigma^2 \ = \ 1 
\end{align*}
$$


---

# # A $5 \times 5$  Kahan  Matrix ($\varsigma = 0.5$)

<br>
<div class="katex-block">
$$
\begin{array}{c|ccccc}
i, j & 1 & 2 & 3 & 4 & 5 \\
\hline 
1 & 1 & -0.8663 & -0.8663 & -0.8663 & -0.8663 \\
2 & 0 & 0.5 & -0.43301 & -0.43301 & -0.43301 \\
3 & 0 & 0 & 0.25 & -0.21651 & -0.21651 \\
4 & 0 & 0 & 0 & 0.125 & -0.10825 \\
5 & 0 & 0 & 0 & 0 & 0.0625 \\
\hline
\text{norm} & 1 & 1 & 1 & 1 & 1
\end{array}
$$
</div>
<br>

<v-click>

## The 5 singular values:
## 2.04, 0.82, 0.38, 0.17, 0.008
</v-click>
<v-click>

There is a dip in the singular values at _4th_ position but it's not a drasstic as we would like
</v-click>


---

# A $300 \times 300$  Kahan  Matrix ($\varsigma = 0.99$)

$$
\begin{array}{c|ccccccc}
 & 1 & 2 & 3 & \cdots & 298 & 299 & 300 \\[0.2em]
\hline 
1   & 1      & -0.14107 & -0.14107 & \cdots & -0.14107 & -0.14107 & -0.14107 \\
2   & 0      & 0.99     & -0.13966 & \cdots & -0.13966 & -0.13966 & -0.13966 \\
3   & 0      & 0        & 0.9801   & \cdots & -0.13826 & -0.13826 & -0.13826 \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
298 & 0      & 0        & 0        & \cdots & 0.05054  & -0.00713 & -0.00713 \\
299 & 0      & 0        & 0        & \cdots & 0        & 0.05004  & -0.00706 \\
300 & 0      & 0        & 0        & \cdots & 0        & 0  & 0.04954 \\[0.2em]
\hline
\text{norm} & 1 & 1 & 1 & \cdots & 1 & 1 & 1
\end{array}
$$

<v-click>
<h2>The last 5 singular values:</h2>

$5.61\times 10^{-2}$, $5.54\times10^{-2}$, $5.48\times 10^{-2}$, $5.41\times 10^{-2}$, $5.34\times 10^{-2}$, $2.28\times 10^{-19}$
</v-click>
<v-click>

As you can see, $\sigma_{300} \approx O(10^{-19})$, therefore the numerical rank is 299, but QRCP says it'll be 300.
</v-click>

<div v-click class="wrong-stamp">QRCP is wrong!</div>


---
layout: statement
---

<v-switch>
<template #0><h1> BUT</h1></template>
<template #1><h1> QRCP works well in practice.</h1>
<h2> Small Trailing R-Submatrices almost always emerge that correlate well with the rank.</h2></template>
</v-switch>


<!-- ---


Cue for Kahan's Entry: Show $5 \times 5$ formulation of Kahan. Extend it to $S_{300}(0.9)$ and show how Kahan fails to produce the rank as $n-1$ but instead says it is a full-rank matrix. (Golub, 5.4.3.). Nevertheless, in practice, small trailing R-submatrices almost always emerge that correlate well with the underlying rank. In other words, it is almost always the case $R_{22}^k$ is small if A has rank k.
$$
\begin{array}{c}
  
  \begin{bmatrix}
    a_{11} &\ \ a_{12} &\ \  a_{13} &\ \  a_{14} &\ \ a_{15} &\ \ a_{16} \\
    a_{21} &\ \ a_{22} &\ \  a_{23} &\ \  a_{24} &\ \ a_{25} &\ \ a_{26} \\
    a_{31} &\ \ a_{32} &\ \  a_{33} &\ \  a_{34} &\ \ a_{35} &\ \ a_{36} \\
    a_{41} &\ \ a_{42} &\ \  a_{43} &\ \  a_{44} &\ \ a_{45} &\ \ a_{46} \\
    a_{51} &\ \ a_{52} &\ \  a_{53} &\ \  a_{54} &\ \ a_{55} &\ \ a_{56} \\
    a_{61} &\ \ a_{62} &\ \  a_{63} &\ \  a_{64} &\ \ a_{65} &\ \ a_{66} \\
  \end{bmatrix} \\
  \underbrace{\hspace{1.8em}}_{\text{1}} \quad
  \underbrace{\hspace{1.8em}}_{\text{1}} \quad
  \underbrace{\hspace{1.8em}}_{\text{1}} \quad
  \underbrace{\hspace{1.8em}}_{\text{1}} \quad
  \underbrace{\hspace{1.8em}}_{\text{1}} \quad
  \underbrace{\hspace{1.8em}}_{\text{1}} \\
\end{array}
$$ -->

---
layout: cover
---

# How did we run it?

<div v-click class="answer"> <b>DGEQRF</b> </div>

<div v-click class="answer"> <b>DORMQR</b> </div>

<h1 v-click> What are these? </h1>
<br>
<h2 v-click> <em>FORTRAN</em> subroutines that implements QR factorization using Householders in <em>LAPACK</em> </h2>

---


# What is LAPACK & FORTRAN?

<v-switch>
  <template #1-7>
    <div style="margin-top: 1.7em;">
      <b><em>LAPACK</em></b>: A library providing routines for solving common linear algebra problems like systems of equations and eigenvalue problems.
    </div>
  </template>

  <template #2-7>
    <div style="margin-top: 1.5em;">
      <b><em>FORTRAN</em></b>: A programming language historically and currently used for scientific and numerical computing.
    </div>
  </template>

  <template #3-7>
    <div style="margin-top: 1.5em;">
      <b><em>BLAS</em></b>: A set of basic linear algebra subprograms for common vector and matrix operations.
    </div>
  </template>

  <template #4-7>
    <div style="margin-top: 1.5em;">
      <b><em>BLAS-2</em></b>: An extension of BLAS focusing on matrix-vector operations.
    </div>
  </template>

  <template #5-7>
    <div style="margin-top: 1.5em;">
      <b><em>BLAS-3</em></b>: An extension of BLAS focusing on matrix-matrix operations, designed for high performance.
    </div>
  </template>

<template #6-7>
<div style="margin-top: 1.5em;">
```mermaid
graph LR
    BLAS3 -->|FORTRAN| LAPACK --> DGEQP3 --> SciPy -->|Python| QRCP
```
</div>
</template>
</v-switch>


---

show FORTRAN code for kahan testing here

---

show kahan test results here

---
clicks: 3
---

<v-switch>

<template #0-3>
<div class="answer">
We know that the previously mentioned algorithms solve Problem-I. 
</div>
</template>

<template #1-3>
<div class="answer">
This begs the questions, will we fare better if the problem-II is also solved simulatenously?
</div>
</template>

<template #2-3>
<div class="answer">
Does this mean we need specialized algorithms for Problem-II?
</div>
</template>


<template #3>
<div class="answer" style="color: red; margin: 10rem 9rem; font-size: 7rem">
NO!
</div>
</template>

</v-switch>

---
class: py-8
---


## **The Unification Principle**: 
<br>
<div class="text-xl">
Earlier, we said there are 2 kinds of problems we're trying to solve.	

$$ \max_{\pi}\sigma_{\min}(A_k) \tag{1} $$

$$ \min_{\pi}\sigma_{\max}(C_k) \tag{2} $$ 

The Golub's QRCP solves Problem-I. For solving Problem-II, there may exist algorithms, but with slight change in perspective, we can repurpose the Algorithms for Problem-I to solve Problem-II.

Since,
$$
\min_{\pi}\sigma_{\max}(C_k) = \min_{\pi}\frac{1}{\sigma_{\min}(C_k^{-1})} \\[0.6em]
=> \frac{1}{\max_{\pi}\sigma_{\min}(C_k^{-1})} = \frac{1}{\max_{\pi}\sigma_{\min}(C_k^{-T})}
$$

Hence, solving Problem-II is equivalent to solving Problem-I for the inverse.
</div>


---


Running the Algorithm to solve Problem-I and Algorithm to solve Problem-II in alteration will lead to the 2nd Algorithm of this paper, and the quintessential algorithm of RRQR Paper, which produces a Robust RRQR Factorization that adheres to the RRQR Conditions given a $k$  

---
class: py-5
clicks: 4
---

### Algorithm 2: Hybrid-III$(k)$
<v-switch>
<template #0-1>
<div class="katex-block">

$$
\begin{array}{ll}
R := M; \quad \Pi := I \\
\textbf{repeat} \\[0.15em]
\quad\quad i_{\min} := \arg\min_{1 \leq i \leq k} \, \omega_i(A_k(R)) \\[0.5em]
\quad\quad \textbf{if} \ \text{there exists a } j \ \text{such that} \ 
\frac{\det[\mathcal{A}_k(R\ \Pi_{i_{\min},\ j+k})]}{\det[\mathcal{A}_k(R)]} > 1 \ \textbf{then} \\[0.5em]

\quad\quad\quad \text{Find such a } j \\[0.25em]
\quad\quad\quad \text{Compute } R := \mathcal{R}_k(R \, \Pi_{i_{\min},\ j+k}) \ and \  \Pi := \Pi \, \Pi_{i_{\min},\ j+k} \\[.15em]
\quad\quad \textbf{endif} \\

\quad\quad j_{\max} := \arg\max_{1 \leq j \leq n-k} \, \gamma_j(C_k(R)) \\[0.5em]

\quad\quad \textbf{if} \ \text{there exists an } i \ \text{such that} \ 
\frac{\det[\mathcal{A}_k(R\ \Pi_{i,\ j_{\max}+k})]}{\det[\mathcal{A}_k(R)]} > 1 \ \textbf{then} \\[0.25em]

\quad\quad\quad \text{Find such an } i \\[0.25em]
\quad\quad\quad \text{Compute } R := \mathcal{R}_k(R \, \Pi_{i,\ j_{\max}+k}) \ and \ \Pi := \Pi \, \Pi_{i,\ j_{\max}+k} \\[0.15em]
\quad\quad \textbf{endif} \\

\textbf{until} \ \text{no interchange occurs}
\end{array}
$$
</div>
</template>

<template #1-3>
<div class="katex-block" v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">

$$ {1}
\begin{array}{l}
\quad i_{\min} := \arg\min_{1 \leq i \leq k} \, \omega_i(A_k(R)) \\[0.5em]
\quad \textbf{if} \ \text{there exists a } j \ \text{such that} \ 
\frac{\det[\mathcal{A}_k(R\ \Pi_{i_{\min},\ j+k})]}{\det[\mathcal{A}_k(R)]} > 1 \ \textbf{then} \\[0.5em]

\quad\quad \text{Find such a } j \\[0.25em]
\quad\quad \text{Compute } R := \mathcal{R}_k(R \, \Pi_{i_{\min},\ j+k}) \ and \  \Pi := \Pi \, \Pi_{i_{\min},\ j+k} \\[.15em]
\quad \textbf{endif}
\end{array}
$$
</div>
</template>

<template #2-3>
<div class="answer-small">

Since, the objective is to find a $\Pi$ for which $\sigma_{\min}(A_k(M\Pi))$ is sufficiently large and $\sigma_{\max}(C_k(M\Pi))$ is sufficiently small, the above Algorithm keeps interchanging the most **_dependent_** of the first $k$ columns with one of the last $n-k$ columns
</div>
</template>

<template #3-5>
<div class="katex-block" v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">

$$ {1}
\begin{array}{l}
\quad\quad j_{\max} := \arg\max_{1 \leq j \leq n-k} \, \gamma_j(C_k(R)) \\[0.5em]

\quad\quad \textbf{if} \ \text{there exists an } i \ \text{such that} \ 
\frac{\det[\mathcal{A}_k(R\ \Pi_{i,\ j_{\max}+k})]}{\det[\mathcal{A}_k(R)]} > 1 \ \textbf{then} \\[0.25em]

\quad\quad\quad \text{Find such an } i \\[0.25em]
\quad\quad\quad \text{Compute } R := \mathcal{R}_k(R \, \Pi_{i,\ j_{\max}+k}) \ and \ \Pi := \Pi \, \Pi_{i,\ j_{\max}+k} \\[0.15em]
\quad\quad \textbf{endif}
\end{array}
$$
</div>
</template>

<template #4-5>
<div class="answer-small">

And interchanging the most **_independent_** of the last $n-k$ columns with one of the first $k$ columns, as long as $\det[A_K(R)]$ is strictly increases.
</div>
</template>

</v-switch>


---


## Why will **Algorithm-2** Halt?
<br>
<div class="answer">

Since, $\det[A_K(R)]$ strictly increases with every interchange, no permutation repeats; and since there are only a finite number of permutations, Algorithm-2 eventually halts.
</div>


---

## *In the second if-loop of Algorithm-2, why does the norm of the column act as a proxy to the independence of the column in $C_k$?*

<v-click> 

Since, $\sigma_{\min} \begin{bmatrix} A_k & b_i \\ 0 & c_i \end{bmatrix} = \sigma_{\min} \begin{bmatrix} A_k & b_i \\ 0 & \gamma_i \end{bmatrix}$, where $\gamma_i = ||c_i||$ 

</v-click>

<v-click> 

So, we would expect a matrix of rank-$K$ to have a $\sigma_{k+1} \approx 0$, and therefore, $\gamma_i \approx \delta$.

</v-click>

<v-click> 

Now, for $M\Pi = Q\begin{pmatrix} A_k & B_k \\ 0 & C_k \end{pmatrix}$, if $\max_{1 \leq i \leq n-k} \gamma_j(C_k) \leq \delta$ it implies $\gamma_j(C_k) \leq \delta$, for all j, and therefore, $\sigma_{\min} \begin{bmatrix} A_k & b_i \\ 0 & c_i \end{bmatrix} = \sigma_{\min} \begin{bmatrix} A_k & b_i \\ 0 & \leq \delta \end{bmatrix} \approx 0$

</v-click>

<v-click> 

Thus, it is a good proxy.

</v-click>


---


## *In the first if-loop of Algorithm-2, why does the norm of the row of the inverse act as a proxy to the dependence of the column in $A_k$?*

<v-click>

We do so because we can approximate the $\sigma_{\min}(A)$ by the reciprocal of the largest 2-norm of the rows of $A^{-1}$: $\sigma_{\min}(A) \leq \min_{1 \leq i \leq n} \frac{1}{||r_i||} \leq \sigma_{\min}(A) \sqrt{n}$

</v-click>

<v-click>
which is equivalent to, 

$\max_{i} ||r_i|| \leq \sigma_{\max}(A^{-1}) \leq \sqrt{n}\max_{i}||r_i||$

</v-click>


---
layout: statement
---


# Chandrasekhar and Ipsen show that the above Algorithm computes an RRQR Factorisation given $k$

## But, Algorithm-2 may not compute SRRQR.


---


## **Digression**: 
<br>
<div class="text-xl leading-loose">

The Basic Solution of the Rank-Deficient Least-Squares Problem using QRCP involved $A_k^{-1}B_k$.<br><br>
We think that the conditions laid out in the RRQR paper are deficient in this additional condition, where we bound the entries of $A_k^{-1}B_k$ and infact the well-conditionality of $A_k$.<br><br> Because of this, the RRQR factorization cannot guarantee 
$\Pi\begin{bmatrix} -R_{11}^{-1}R_{12} \\ I_{n-k} \end{bmatrix}$
to be a stable approximation of the right null space of M
</div>


---
layout: statement
---

## On Kahan-192, The RRQR Algorithms produce $A_k$ and $B_k$ such that $\max |A_k^{-1}B_k|_{i,j} \approx O(10^{20})$

## Therefore, it would make sense to bound this.


---


## **SRRQR Conditions**: 
<br>
<div class="text-xl">

$$
\sigma_{i}(A_k) \geq \frac{\sigma_i(M)}{q_1(k,n)} \tag{1}
$$

$$
\sigma_{j}(C_k) \leq \sigma_{k+j}(M)\ q_1(k,n) \tag{2}
$$

$$
\left|(A_k^{-1}B_k)_{i,j}\right| \leq q_2(k,n) \tag{3}
$$
</div>   

<br>
<div class="description">

In addition to the reason we've given for the introduction of the bound for $A_k^{-1}B_k$, we think that the alteration in conditions (1) and (2) makes the SRRQR enforce a tighter bound on every singular value of the matrix and not just the minimum singular of $A_k$ and the maximum singular value of $C_k$
</div>

---

## **SRRQR - 1**: 

### Algorithm 3: Compute a strong RRQR factorization, given $k$
<div class="katex-block">

$$
\begin{array}{ll}
\textbf{Algorithm 3:} \text{Compute a strong RRQR factorization, given } k \\[0.9em]

R := \mathcal{R}_k(M); \quad \Pi := I \\[0.9em]

\textbf{while} \ \text{there exist } i \text{ and } j \text{ such that } \frac{\det(\bar{A}_k)}{\det(A_k)} > f, \\[0.9em]
\quad \text{where } R = \begin{pmatrix} A_k & B_k \\ & C_k \end{pmatrix} \text{ and } \mathcal{R}_k(R \, \Pi_{i,j+k}) = \begin{pmatrix} \bar{A}_k & \bar{B}_k \\  & \bar{C}_k \end{pmatrix}, \ \textbf{do} \\\\

\quad \text{Find such an } i \text{ and } j \\\\

\quad \text{Compute } R := \mathcal{R}_k(R \, \Pi_{i,j+k}) \text{ and } \Pi := \Pi \, \Pi_{i,j+k} \\\\

\textbf{endwhile}
\end{array}
$$
</div>


---
clicks: 3
---

# Dry-Run of SRRQR-1

<Srrqr1
  :steps="$slidev.nav.clicks"
  :highlights="[
    [],
    [[0, 0], [0,1], [0,2], [1,0] ,[1, 1], [1,2], [2,0], [2,1], [2,2]], 
    [],       // step 0 highlights
    [[0, 0], [0,1], [0,2], [1,0] ,[1, 1], [1,2], [2,0], [2,1], [2,2]],// step 1 highlights
  ]"
/>

<v-switch>
  <template #0>
    <pre class="perm-line text-xl">permutations:   1          2           3           4          5</pre>
  </template>
  <template #1>
    <pre class="perm-line text-xl">permutations:   1          2           3           4          5</pre>
  </template>
  <template #2>
    <pre class="perm-line text-xl">permutations:   <span style="color: red">4</span>          2           3           <span style="color: red">1</span>          5</pre>
  </template>
  <template #3>
    <pre class="perm-line text-xl">permutations:   4          2           3           1          5</pre>
  </template>
</v-switch>

<span v-if="$slidev.nav.clicks === 1"> $\det(A_k)$ = 0 </span>
<span v-if="$slidev.nav.clicks === 3"> $\det(A_k)$ = 5.6569 </span>

---


## **What does this do differently**?
<br>
<div class="answer">

While Algorithm 2 interchanges either the most "dependent" column of $A_k$ or the most "independent" column of $C_k$, **SRRQR-1** interchanges any pair of columns that sufficiently increases $\det(A_k)$.
</div>

---
layout: fact
---


<!-- ## **Lemma**:  -->

$$
\frac{\det(\bar{A}_k)}{\det(A_k)} = \sqrt{(A_k^{-1} B_k)_{i,j}^2 + \left( \frac{\gamma_j(C_k)}{\omega_i(A_k)} \right)^2}
$$
<br>
Define,

$$
\rho(R, k) = \max_{\substack{1 \leq i \leq k \\\\ 1 \leq j \leq n - k}} 
\sqrt{(A_k^{-1} B_k)_{i,j}^2 + \left( \frac{\gamma_j(C_k)}{\omega_i(A_k)} \right)^2}
$$



---
clicks: 3
---

## **SRRQR-2**:
<v-switch>
<template #0-1>
<div class=" katex-block">

### Algorithm 4: Compute a strong RRQR factorization, given $k$
$$
\begin{array}{ll}
\text{Compute } R \equiv \begin{pmatrix} A_k & B_k \\ C_k \end{pmatrix} := \mathcal{R}_k(M), \quad \Pi := I \\[0.9em]
\textbf{While } \rho(R, k) > f \text{ do:} \\[0.9em]
\quad \text{ Find } i, j \text{ such that:} \\[0.9em]
\quad\quad \sqrt{(A_k^{-1} B_k)_{i,j}^2 + \left( \frac{\gamma_j(C_k)}{\omega_i(A_k)} \right)^2} > f \\[0.9em]
\quad \text{ Compute:} \\[0.9em]
\quad\quad R \equiv \begin{pmatrix} A_k & B_k \\ C_k \end{pmatrix} := \mathcal{R}_k(R \, \Pi_{i,j+k}) \ \text{and update } \Pi := \Pi \, \Pi_{i,j+k} \\[0.9em]
\text{Endwhile}
\end{array}
$$
</div>
</template>

<template #1-5>

<div v-motion :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="katex-block">
$$
\textbf{While } \rho(R, k) > f \text{ do:}
$$
</div>
<br>
<h2><b>What is this <em>f</em> ? Why do we need this <em>f</em> ?</b></h2>
</template>

<template #2-3>
<div class="answer">

We want after every interchange the determinant of $A_k$ to go up. That means we want $\frac{\det(\hat{A_k})}{\det(A_k)} \geq 1$. But finding a $\Pi$ may take exponential amount of time?  Therefore, let's loosen the bound to any $f \geq 1$
</div>
</template>

<template #3-4>
<div class="answer">

When the algorithm-4 halts, $\rho(R_k(M\Pi),k) \leq f$, this means the condition-3 of SRRQR is satisfied, where $q_2(k,n) = f$, and consequently this implies that Conditions-1 & 2 of SRRQR hold with $q_1(k,n) = \sqrt{1 + f^2k(n-k)}$
</div>
</template>

</v-switch>


---


We proved that Algorithm-3 and 4 compute a strong RRQR given k.

Now, we can't do anything with them because they require a $k$. So, let us, now, produce an algorithm that computes $k$ and a strong RRQR, as we go.


---
class: text-sm px-10 py-4
---


<div class="grid grid-cols-3 gap-4">
<div class="col-span-2">

### Algorithm 5: Compute $k$ and a strong RRQR factorization

$$ {all|1-3|5-13|15-31}
\begin{array}{ll}
k := 0, \, R \equiv C_k := M, \, \Pi := I \\\\
\text{Initialize } \omega_*(A_k), \gamma_*(C_k), \text{ and } A_k^{-1} B_k \\\\

\textbf{While } \max_{1 \leq j \leq n-k} \gamma_j(C_k) \geq \delta: & \\\\
\qquad  j_{\text{max}} := \arg\max_{1 \leq j \leq n-k} \gamma_j(C_k) \\\\
\qquad  k := k + 1 \\\\
\qquad  R \equiv 
  \begin{pmatrix}
    A_k & B_k \\
        & C_k
  \end{pmatrix}
  := \mathcal{R}_k(R \Pi_{k, k + j_{\text{max}} - 1}), \,
  \Pi := \Pi \, \Pi_{k, k + j_{\text{max}} - 1} \\\\
\qquad \text{Update } \omega_*(A_k), \gamma_*(C_k), A_k^{-1} B_k \\\\

\qquad  \textbf{While } \hat{\rho}(R, k) > f: \\\\
\qquad\qquad \text{Find } i, j \text{ such that } 
    |(A_k^{-1} B_k)_{i,j}| > f \, \text{ or } \,
    \frac{\gamma_j(C_k)}{\omega_i(A_k)} > f \\\\
\qquad\qquad R \equiv 
  \begin{pmatrix}
    A_k & B_k \\
        & C_k
  \end{pmatrix}
  := \mathcal{R}_k(R \, \Pi_{i, j+k}), \,
  \Pi := \Pi \, \Pi_{i, j+k} \\\\
\qquad\qquad \text{Modify } \omega_*(A_k), \gamma_*(C_k), A_k^{-1} B_k \\\\
\text{Repeat until the conditions fail.}
\end{array}
$$

</div>

<div class="text-lg">
<div v-if="$slidev.nav.clicks === 2">

Here, the outer-while loop increments <em>k</em> until it finds sufficient gap in singular values of $M$, and when it stops, that is the computed rank $k$.
</div>
  
<div v-else-if="$slidev.nav.clicks >= 3">

The inner-while loop, given a <em>k</em>, finds the SRRQR factorisation. This algorithm eventually halts due to the same reason as previous algorithm.
</div>
</div>

</div>

---

Thus Algorithm 5 can detect a sufficiently large gap in the singular values of M if we change the condition in the outer while-loop to $\max_{1 \leq j \leq n-k}\gamma_j(C^k) \geq \delta \lor \max_{1 \leq i \leq k, 1 \leq j \leq n-k} \frac{\gamma_j(C_k)}{\omega_i(A_k)} \geq \zeta$. This is useful when solving RD-LSP using RRQR factorization. This is we've introduced the need for SRRQR, by the way. A full circle.

---

**Note**: 

The paper goes at length explaining how to update $A_k$, $B_k$, $C_k$, $\omega_{*}(A_k)$, $\gamma_{*}(C_k)$, $A_k^{-1}B_k$ after $k$ increases and to modify them after an interchange. Also, the bounds the total number of interchanges and the total number of operations.

# Operation Count: $O(mnk_f)$
## Where $k_f$ is the final value of $k$ when SRRQR-3 (Algorithm-5) halts.

---

**Golub is King, But Stewart follows**: 

Since, Algorithm-1 seems to work well in practice. Algorithm-5 tends to perform very few or no interchanges in its inner-while loop. This suggests using Algorithm-1 as an initial phase, and then using Algorithm-4 to remove any dependent columns from $A_k$, reducing $k$ as needed. In many respects, the resulting algorithm is equivalent to applying Algorithm 5 to $M^{-1}$

---

Some Big-Picture Questions: 

1. How can we measure the performance of the factorisation? By monitoring $\frac{\sigma_k(M)}{\sigma_{\min}(A_k)}$ and $\frac{\sigma_{\max}(C_k)}{\sigma_{k+1}(M)}$

2. We know that computing singular values is an expensive operation. Assuming you have access to black-box which produces singular values quickly, how would you change the Algorithm-1? Greedy I, as defined in RRQR Paper.

3. A cool interpretation we've come up with on why Stewart works.

---
layout: section
---
# Numerical Experiments

---
layout: image
image: public/ne_svd_vs_rrqr.png
backgroundSize: 80%
class: py-6
---

# SVD vs RRQR

Here, $A_k$ refers to $A_{SVD}$ and $B_k$ refers to $A_{RRQR}$


---
layout: image
image: public/ne_srrqr_1.png
backgroundSize: 50%
class: py-6
---

# SRRQR vs RRQR (1)

Here, $t_{k_f}$ refers to the number of interchanges of the columns.


---
layout: image
image: public/ne_srrqr_2.png
backgroundSize: 70%
class: py-6
---

# SRRQR vs RRQR (2)

---
layout: image
image: public/norm_of_residual.png
backgroundSize: 70%
class: py-6
---

# Least Squares
## Norm of the Residual
### T: Truncated, F: Full


---
layout: image
image: public/differences_bw_solns.png
backgroundSize: 70%
class: py-6
---

# Least Squares
## Difference Between the Solutions.
### T: Truncated, B: Basic

---

# Motivations, as given in the paper
<br>
<v-clicks>

- Deep learning models are over-parameterized.
- Need to prune these models.
- Existing methods require significant fine-tuning of compressed models.
- We want more:
  
  - Preserve Model's Per-Example Decision
  - Compress while retaining Computational Structure
  - Minimize the need for Fine-Tuning.
- Use Interpolative Decompositions.

</v-clicks>

---
layout: statement
---

# An ID-based algorithm # 
for compressing
neural networks that preserves the model's decisions and maintains the network’s layer structure
without the need for _fine tuning_

---

# Interpolative Decompositions
<br>

Let $A \in \mathbb{R}^{n \times m}$ and $\epsilon \geq 0$.

An $\epsilon$-accurate interpolative decomposition  
$$
A \approx A_{:,\mathcal{I}} T
$$  
is a subset of columns of $A$, denoted with the index subset $\mathcal{I} \subset [m],$ and an associated interpolation matrix $T$ such that  
$$
\|A - A_{:,\mathcal{I}} T \|_2 \leq \epsilon\|A\|_2.
$$

---
layout: fact
---

## Rank-_k_ approximation with RRQR

<div class="text-3xl">
$$
\left\| A - Q_1 
\begin{bmatrix}
R_{11} & R_{22}
\end{bmatrix}
\Pi^\top \right\|_2
=
\left\| R_{22} \right\|_2
$$
</div>

---

# Computing Interpolative Decompositions
<br>

Given a rank-revealing QR factorization, we can immediately construct an ID. Let $\mathcal{I} \subset [m]$ be such that $A_{:,\mathcal{I}} = A \Pi_1$ and define the interpolation matrix  
<div class="text-2xl">
$$
T = 
\begin{bmatrix}
I_k & R_{11}^{-1} R_{12}
\end{bmatrix}
\Pi^\top.
$$  
</div>

With the choice $A_{:,\mathcal{I}} = Q_1 R_{11}$ it follows that the error of the ID as defined by $\mathcal{I}$ and $T$ is 
<div class="text-2xl"> 
$$
\|A - A_{:,\mathcal{I}} T\|2 = \|R{22}\|_2.
$$
</div>


---

# A Neural Network
<br>

Consider a simple two-layer (one hidden layer) fully connected neural network $h_{FC} : \mathbb{R}^d \to \mathbb{R}^c$ of width $m$ defined as  
<div class="text-3xl">
$$
h_{FC}(x; W, U) = U^\top g(W^\top x)
$$
</div>


---

# Pruning a Network

<v-switch class="text-xl">

<template #1-4>

Concretely, let $Z \in \mathbb{R}^{m \times n}$ be the first-layer output, i.e., $Z = g(W^\top X),$ and let  
$$
Z^\top \approx (Z^\top)_{:,\mathcal{I}} T 
$$  
be a rank-$k$ ID of $Z^\top$ with $|\mathcal{I}| = k$ and interpolation matrix $T \in \mathbb{R}^{k \times m}$ that achieves accuracy $\epsilon$

</template> 


<template #2-4>

Because the activation function $g$ commutes with the sub-selection operator, if $Z \approx T^\top Z_{\mathcal{I},:}$ then  
$$
g(W^\top X) 
\approx T^\top \left( g(W^\top X) \right)_{\mathcal{I},:}
=
T^\top g\left( W_{:,\mathcal{I}}^\top X \right)
$$  
</template>

<template #3-4>

Multiplying both sides by $U^\top$ now gives an approximation of the original network by a pruned one,  

$$
h_{FC}\left(x; W, U \right) 
= U^\top g(W^\top X) 
\approx h_{FC}\left(x; W_{:,\mathcal{I}}, T U \right)
= U^\top T^\top g\left( W_{:,\mathcal{I}}^\top X \right).
$$

</template>
</v-switch>

---
class: py-6
---

## Algorithm: Pruning a multilayer network with interpolative decompositions
<div class="grid grid-cols-3 gap-4">
<div class="col-span-2 katex-block" style="font-size: 80%">

1. $T^{(0)} \gets I$
2. *for* $l \in \{1, \dots, L\}$ *do*
   1. $Z \gets h_{1:l}(X; W^{(1)}, \dots, W^{(l)})$ // Layer $l$ activations

   2. *if* layer $l$ is a *Fully Connected (FC)* layer *then*
      1. $(\mathcal{I}, T^{(l)}) \gets 
      \begin{cases}
      \operatorname{ID}(Z^\top; \alpha) & \text{if } l \notin S \\
      (:, I) & \text{if } l \in S 
      \end{cases}$
      2. $\widehat{W}^{(l)} \gets T^{(l-1)} W^{(l)}_{:, \mathcal{I}}$ // Sub-select neurons
   3. *else if* layer $l$ is a *Conv (or Conv+Pool)* layer *then*
      1. $(\mathcal{I}, T^{(l)}) \gets 
      \begin{cases}
      \operatorname{ID}(\operatorname{Reshape}(Z); \alpha) & \text{if } l \notin S \\
      (:, I) & \text{if } l \in S
      \end{cases}$
      2. $\widehat{W}^{(l)} \gets \operatorname{Matmul}(T^{(l-1)}, W^{(l)}_{\mathcal{I}, \ldots})$ // Sub-select channels
   4. *else if* layer $l$ is a *Flatten* layer *then*
      1. $T^{(l)} \gets T^{(l-1)} \otimes I$ // Expand interpolation matrix
3. *end for*
</div>

<div>

*Input:*
- Neural network: $h(x; W^{(1)}, \ldots, W^{(L)})$
- Layers to not prune: $S \subset [L]$
- Pruning set: $X$
- Pruning fraction: $\alpha$

*Output:*
- Pruned network: $h(x; \widehat{W}^{(1)}, \ldots, \widehat{W}^{(L)})$
</div>
</div>


---

# VGG-16 for CIFAR-10 (No Finetuning)

<img src="C:/Users/HP/OneDrive/Documents/SRRQR/vggPreFT_page-0001.jpg">


---
layout: statement
---

# Let's see it working!


---
layout: image
image: "public/clean_xor_dataset.png"
backgroundSize: 50%
---


# Constructing a dataset


---
layout: fact 
---

## We can classify this dataset with just 4 neurons.

---
layout: iframe

url: "https://playground.tensorflow.org/#activation=relu&batchSize=10&dataset=xor&regDataset=reg-plane&learningRate=0.1&regularizationRate=0&noise=5&networkShape=4&seed=0.56060&showTestData=false&discretize=false&percTrainData=60&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=true"
---

---
layout: fact 
---

## Let's construct an over-parameterized network with 30 neurons.


---
layout: image
image: "public/overparam_model_boundary.png"
backgroundSize: 60% 75%
class: py-6
---

# 100% Accuracy


---
layout: fact 
---

## Let's prune it!


---
layout: two-cols-header
class: py-6   
---

# Code

::left::

```python {all}{maxHeight:'400px'}
def getID(k, Z, W=None, mode='kT'):
    '''
    Calculate ID (Interpolative Decomposition) of activation matrix Z
    
    Args:
        k: number of columns to keep (size of subset I)
        Z: activation matrix after nonlinearity, shape (d, n)
        W: weight matrix (optional)
        mode: what to return ('kT' or 'WT')
    
    Returns:
        I: indices of selected neurons
        T: interpolation matrix
        
    Based on the mathematical formulation:
    Z^T ≈ (Z^T)_{:,I} T where |I| = k
    '''
    assert(k <= Z.shape[1])
    # column-pivot QR
    R, P = scipy.linalg.qr((Z), mode='r', pivoting=True)
    I = P[0:k]  # Selected indices I
    
    if W is not None: 
        W_I = W[:, I]  # Selected weights W_{:,I}
    
    # Compute interpolation matrix T
    T = np.concatenate((
        np.identity(k),
        np.linalg.pinv(R[0:k, 0:k]) @ R[0:k, k:None]
    ), axis=1)
    T = T[:, np.argsort(P)]
    
    if mode == 'kT':
        return I, T
    elif mode == 'WT' and W is not None:
        return W_I, T
    else:
        raise NotImplementedError
```

::right::

```python {all}{maxHeight:'400px'}
def compress_model_ID(model, X, k):
    """
    Compress model using interpolative decomposition
    
    Following the mathematical formulation:
    h_FC(x; W, U) ≈ h_FC(x; W_{:,I}, T U)
    
    Args:
        model: original model with parameters W, U
        X: pruning dataset 
        k: target width (number of neurons to keep)
    
    Returns:
        compressed_model: model with parameters W_{:,I}, TU
        I: indices of selected neurons
        T: interpolation matrix
    """
    X_tensor = torch.FloatTensor(X)
    
    # Get activations Z = g(W^T X)
    Z = model.get_activations(X_tensor)
    # Transpose Z to have shape (d, n) as expected by getID
    # Z = Z.T
    
    # Get model parameters W and U
    W, b1, U, b2 = model.get_params()
    
    # Apply interpolative decomposition: Z^T ≈ (Z^T)_{:,I} T
    I, T = getID(k, Z, mode='kT')

    # Ensure indices I are properly formatted and within bounds
    I = np.array(I).astype(int)
    I = I[I < W.shape[0]]  # Ensure indices are within bounds
    
    if len(I) < k:
        print(f"Warning: Only {len(I)} valid indices found, expected {k}")
        # If we have fewer indices than expected, adjust T accordingly
        T = T[:len(I), :]
    
    # Create new weights for the compressed model:
    # W_hat = W_{:,I} ∈ R^{d×k}
    # U_hat = TU ∈ R^{k×c}
    W_hat = W[I, :]  # Select columns of W corresponding to I
    b1_hat = b1[I]   # Select biases corresponding to I
    U_hat = (U @ T.T).reshape(1, len(I))  # T U is the new output layer weight
    
    # Create new model with compressed weights
    compressed_model = MinimalXORModel(hidden_size=len(I))
    compressed_model.set_params(W_hat, b1_hat, U_hat, b2)
    
    return compressed_model, I, T
```


---

# Applying ID for model compression

| k | Accuracy | Selected neuron indices |
|---|---|---|
| 1 | 0.545000 | [4] |
| 2 | 0.552500 | [4, 13] |
| 3 | 0.750000 | [4, 13, 22] |
| 4 | 1.000000 | [4, 13, 22, 2] |
| 5 | 1.000000 | [4, 13, 22, 2, 20] |
| 6 | 1.000000 | [4, 13, 22, 2, 20, 24] |
| 7 | 1.000000 | [4, 13, 22, 2, 20, 24, 21] |
| 8 | 1.000000 | [4, 13, 22, 2, 20, 24, 21, 12] |




