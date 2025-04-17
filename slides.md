---
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: public/Presentation-1.png
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



---
layout: image
image: public/Presentation-1.png
---

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
layout: center
---

## Why do we care about rank?

## 1. Least-Squares

## 2. Subset Selection

## 3. Linear Dependency Analysis

## and more ...


<div class="answer" v-click>The first algorithm that utilizes QR and produces a rank was introduced by Golub, with Bussinger  (1965)</div>

---
layout: fact
class: px-30
---

Given a matrix $M \in R^{m \times n}$ with $m \geq n$, we consider a QR factorisation of the form: 

<span class='text-3xl'> $M\Pi = QR = Q\begin{pmatrix} A_k & B_k \\ 0 & C_k \end{pmatrix}$ </span>

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
layout: image
image: public/Presentation-2.png
---


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
    <pre class="perm-line text-xl">                <span style="color: red" class="text-2xl">5</span>          2           3           4          <span style="color: red" class="text-2xl">1</span></pre>
  </template>
  <template #2>
    <pre class="perm-line text-xl">                5          2           3           4          1</pre>
  </template>
  <template #3>
    <pre class="perm-line text-xl">                5          <span style="color: red" class="text-2xl">3</span>           <span style="color: red" class="text-2xl">2</span>           4          1</pre>
  </template>
  <template #4>
    <pre class="perm-line text-xl">                5          3           2           4          1</pre>
  </template>
  <template #5>
    <pre class="perm-line text-xl">                5          3           2           4          1</pre>
  </template>
</v-switch>

---
layout: center
---

## Why are we doing this pivoting?

<div v-click class="answer">
To gather the well-conditioned columns in the left-bucket and the rest on the right bucket. Once concluded, the number of columns in the left-bucket is the rank of the matrix.
</div>


---
layout: center
---

## What do we mean by gathering the well-conditioned columns in the left? 

<div v-click class="answer">

It means that we're trying to greedily maximise of determinant of $A_k$
</div>

---
clicks: 3
layout: center
---

## Why do we want to maximise the $det(A_k)$?

<v-switch>
<template #3>
<div class="answer">
Therefore, it suffices to maximise the determinant because it is a product of singular values.
</div>
</template>

<template #1>
<div class="answer">

Assume that $k$ is a given integer such that $1 \leq k \lt n$ and $\sigma_k(M) > 0$. If $\sigma_(M)$ and $\sigma_{k+1}(M)$ are *well-separated*, and $\sigma_{k+1}(M)$ is small, of $O(\epsilon)$, then $k$ is considered the **Numerical Rank**

</div>
</template>

<template #2>
<div class="answer">

Therefore the **RRQR** problem can be precisely formulated as:

$$ \max_{\pi}\sigma_{\min}(A_k) \tag{1}$$
$$ \min_{\pi}\sigma_{\max}(C_k) \tag{2}$$
or Solving Both
</div>
</template>

</v-switch>



---
layout: statement
---
## __**Low Rank Approximation**__

<br>

<v-switch>

<template #0-2>

  1. **SVD** : If you want Rank-K approximation, take $\sum_{i=1}^{k}\sigma_i u_i v_i^T$
  2. **RRQR** : $||A - Q_{m \times k} \begin{bmatrix} A_k & B_k \end{bmatrix} \Pi^T||_2 = ||C_k||_2$ 

</template>

<template #1-2>

<strong> Another way to think about why do we want to maximize $det(A_k)$ and equivalently minimise $det(C_k)$? </strong>


Because we seek to minimise the error $||C_k||_2$

</template>

</v-switch>

---
layout: center
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
## _k_ = 50 and _k_ = 200 

---
layout: image
image: public/error_vs_time.png
backgroundSize: 90%
---

<span class="text-3xl" color="black"> Reconstruction Error & Time vs K </span>

---
layout: image
image: public/logistic.png
backgroundSize: 45%
---

<span class="text-3xl" color="black"> Post-50, keep it simple! </span>

---

# A Dumb Face Detector
<Camera />

---


# **RRQR Conditions**: 
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

# **What is that Greedy Algorithm?**
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

**Now, the pertinent question,**
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

**Since, it's an approximation, you can cook-up an example, where it fails, and here it is.**

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

## A $5 \times 5$  Kahan  Matrix ($\varsigma = 0.5$)

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

We sought to completely by-pass Scipy, and directly hit the LAPACK Subroutines to be as low-level as possible.

<div v-click class="answer"> <b>DGEQRF</b> </div>

<div v-click class="answer"> <b>DORMQR</b> </div>

<h1 v-click> What are these? </h1>
<br>
<h2 v-click> <em>FORTRAN</em> subroutines that implements QR factorization using Householder in <em>LAPACK</em> </h2>

---


# What is LAPACK & FORTRAN?

<v-switch>
  <template #1-7>
    <div style="margin-top: 1.7em;">
      <b><em>LAPACK</em></b> : A library providing routines for solving common linear algebra problems like systems of equations and eigenvalue problems.
    </div>
  </template>

  <template #2-7>
    <div style="margin-top: 1.5em;">
      <b><em>FORTRAN</em></b> : A programming language historically and currently used for scientific and numerical computing.
    </div>
  </template>

  <template #3-7>
    <div style="margin-top: 1.5em;">
      <b><em>BLAS</em></b> : A set of basic linear algebra subprograms for common vector and matrix operations.
    </div>
  </template>

  <template #4-7>
    <div style="margin-top: 1.5em;">
      <b><em>BLAS-2</em></b> : An extension of BLAS focusing on matrix-vector operations.
    </div>
  </template>

  <template #5-7>
    <div style="margin-top : 1.5em;">
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

# Fortran Code for conducting QRCP on Kahan-300

```fortran-free-form {2-27|28-31|33-37|39-46|67-69|83-85|105-124}{lines:true,maxHeight:'500px'}
program run_dgeqp3_on_kahan
    implicit none

    ! Use standard double precision
    integer, parameter :: n_dim = 300
    double precision, parameter :: zeta_val = 0.99d0 ! Use d0 suffix

    ! Kahan matrix components and result
    double precision :: s_mat(n_dim, n_dim)
    double precision :: k_mat(n_dim, n_dim)
    double precision :: a_kahan(n_dim, n_dim) ! This will be M = S * K

    ! DGEQP3 arguments
    integer :: m, n, lda, info, lwork
    integer :: jpvt(n_dim)
    double precision :: tau(n_dim) ! Size min(M,N)
    double precision, allocatable :: work(:)
    double precision :: work_query(1) ! For workspace query

    ! --- Estimate Rank from Diagonal of R ---
    integer :: estimated_rank
    double precision :: tol, matrix_eps

    ! Local variables
    integer :: i, j
    double precision :: phi_val

    ! Calculate phi
    phi_val = sqrt(1.0d0 - zeta_val**2) ! Use d0 suffix
    print *, "Using N =", n_dim, ", ZETA =", zeta_val, ", PHI =", phi_val

    ! --- Construct S_n Matrix ---
    s_mat = 0.0d0 ! Use d0 suffix
    do i = 1, n_dim
        s_mat(i, i) = zeta_val**(i - 1)
    end do

    ! --- Construct K_n Matrix ---
    k_mat = 0.0d0 ! Use d0 suffix
    do i = 1, n_dim
        k_mat(i, i) = 1.0d0 ! Use d0 suffix
        do j = i + 1, n_dim ! Elements above the diagonal
            k_mat(i, j) = -phi_val
        end do
    end do

    ! --- Compute Kahan Matrix M = S_n * K_n ---
    a_kahan = matmul(s_mat, k_mat)

    ! --- Print a small part of the Kahan matrix for verification ---
    print *, "Top-left 5x5 block of the generated Kahan matrix A:"
    do i = 1, min(5, n_dim)
        write(*, '(5(E13.5, 1X))') (a_kahan(i, j), j = 1, min(5, n_dim))
    end do
    print *, ""

    ! --- Set up DGEQP3 parameters ---
    m = n_dim     ! Number of rows
    n = n_dim     ! Number of columns
    lda = n_dim   ! Leading dimension of A

    ! --- Initialize JPVT for DGEQP3 ---
    ! Set JPVT(j) = 0 to indicate column j is free to be pivoted.
    jpvt = 0

    ! --- Workspace Query for DGEQP3 ---
    lwork = -1    ! Signal for workspace query
    call dgeqp3(m, n, a_kahan, lda, jpvt, tau, work_query, lwork, info)

    if (info /= 0) then
        print *, "Error during DGEQP3 workspace query. INFO =", info
        stop 1
    end if

    lwork = int(work_query(1)) ! Get optimal workspace size
    allocate(work(lwork))
    print *, "Optimal LWORK calculated for DGEQP3:", lwork
    print *, ""

    ! --- Reset JPVT before the actual call (important!) ---
    jpvt = 0

    ! --- Call DGEQP3 to perform QR with Column Pivoting ---
    ! Note: a_kahan will be overwritten with R and factorization info (Q details)
    call dgeqp3(m, n, a_kahan, lda, jpvt, tau, work, lwork, info)

    ! --- Check for errors ---
    if (info < 0) then
        print *, "Error in DGEQP3 call: Argument", -info, "had an illegal value."
    else if (info > 0) then
        ! Note: DGEQP3 INFO > 0 is unlikely/not defined for standard errors
        print *, "Warning/Error from DGEQP3 computation. INFO =", info
    else
        print *, "DGEQP3 completed successfully. INFO = 0"
    end if
    print *, ""

    if (info == 0) then ! Proceed only if DGEQP3 was successful
        if (min(m, n) == 0) then
            estimated_rank = 0
        else
            ! Get machine epsilon for the precision of a_kahan
            matrix_eps = epsilon(a_kahan(1, 1))

            ! Calculate tolerance relative to R(1,1) = a_kahan(1,1)
            tol = max(m, n) * matrix_eps * abs(a_kahan(1, 1))

            ! Handle case where R(1,1) is essentially zero
            if (abs(a_kahan(1,1)) <= tol) then
                 estimated_rank = 0
            else
                ! Assume rank is at least 1 if R(1,1) > tol
                estimated_rank = 1
                ! Find the largest k such that abs(R(k,k)) > tol
                do i = 2, min(m, n)
                    if (abs(a_kahan(i, i)) > tol) then
                        estimated_rank = i
                    else
                        ! First element below tolerance found, stop. Rank is i-1.
                        exit
                    end if
                end do
             endif
        endif

        print *, "Estimated Numerical Rank (based on R diagonal):", estimated_rank
        print *, "  (Using tolerance =", tol, ")"
    else
        print *, "Rank estimation skipped due to DGEQP3 error."
    endif
    print*, ""

    ! --- Print Results ---
    ! DGEQP3 doesn't return rank/condition estimates directly.
    ! Rank could be estimated by examining the diagonal of R in A.
    print *, "Factorization complete. Examine JPVT and the upper triangle of A (contains R)."
    print *, ""

    print *, "Permutation Vector (JPVT):"
    write(*,'(20I5)') (jpvt(i), i = 1, n_dim)
    print *, ""

    ! print *, "Print bottom 10x10 block of the resulting R matrix (in A):"
    ! do i = 1, 10
    !     write(*, '(10(E13.5, 1X))') (a_kahan(n_dim - 9 + i, j), j = 1, 10)
    ! end do
    ! print *, ""

    ! --- Clean up ---
    deallocate(work)

end program run_dgeqp3_on_kahan
```

---

# Results of Kahan-300

```md {1|2-3|9-11|14-29}{lines:true,maxHeight:'500px'}
 Using N =  300
 ZETA =  0.98999999999999999 
 PHI =  0.14106735979665894     
 
 Optimal LWORK calculated for DGEQP3:       10232
 
 DGEQP3 completed successfully. INFO = 0
 
 Estimated Numerical Rank (based on R diagonal):         300
   (Using tolerance =   6.6613381477509392E-014 )
 
 Factorization complete. Examine JPVT and the upper triangle of A (contains R).
 
 Permutation Vector (JPVT):
    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20
   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37   38   39   40
   41   42   43   44   45   46   47   48   49   50   51   52   53   54   55   56   57   58   59   60
   61   62   63   64   65   66   67   68   69   70   71   72   73   74   75   76   77   78   79   80
   81   82   83   84   85   86   87   88   89   90   91   92   93   94   95   96   97   98   99  100
  101  102  103  104  105  106  107  108  109  110  111  112  113  114  115  116  117  118  119  120
  121  122  123  124  125  126  127  128  129  130  131  132  133  134  135  136  137  138  139  140
  141  142  143  144  145  146  147  148  149  150  151  152  153  154  155  156  157  158  159  160
  161  162  163  164  165  166  167  168  169  170  171  172  173  174  175  176  177  178  179  180
  181  182  183  184  185  186  187  188  189  190  191  192  193  194  195  196  197  198  199  200
  201  202  203  204  205  206  207  208  209  210  211  212  213  214  215  216  217  218  219  220
  221  222  223  224  225  226  227  228  229  230  231  232  233  234  235  236  237  238  239  240
  241  242  243  244  245  246  247  248  249  250  251  252  253  254  255  256  257  258  259  260
  261  262  263  264  265  266  267  268  269  270  271  272  273  274  275  276  277  278  279  280
  281  282  283  284  285  286  287  288  289  290  291  292  293  294  295  296  297  298  299  300

```

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
layout: statement
---

## Running the Algorithm to solve *Problem-I* and Algorithm to solve *Problem-II* in alteration will lead to the 2nd Algorithm of this paper, and the quintessential algorithm of *RRQR Paper*, which produces a Robust RRQR Factorization that adheres to the RRQR Conditions given a $k$  

---
layout: image
image: public/Presentation-3.png
---

---
class: py-5
clicks: 4
---

## Algorithm 2: Hybrid-III$(k)$
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

## In the second if-loop of Algorithm-2, why does the norm of the column act as a proxy to the independence of the column in $C_k$?

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


## In the first if-loop of Algorithm-2, why does the norm of the row of the inverse act as a proxy to the dependence of the column in $A_k$?

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

# The Implementation Story

<v-switch>

<template #1-6>
1. Started with an python implementation, where the entire logic happens in C/Fortran and python only exists for the outer-loop logic.
</template>

<template #2-6>
2. Sadly, when we ran this on Kahan-300, the rank was still 300. Indicating an issue with the implementation.
</template>

<template #3-6>
3. After a long search through the interwebs, Found a paper from 1990s. It's called ACM 782 by CH Bischof. It's a paper about the efficient implementation of the RRQR, Block QRCP algorithms in Fortran.
</template>

<template #4-6>
4. Thus started a long journey into understanding fortran code, compiling fortran code, the organizing of source code of LAPACK, CALGO, etc...
</template>

<template #5-6>
5. This led to some nice fruits.
</template>

</v-switch>

---

# Source Code for RRQR (Hybrid-III) - DGEQPX

```fortran-free-form {1-15|213-220|221-228}{lines:true,maxHeight:'500px'}
SUBROUTINE DGEQPX( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,
     $                   ORCOND, RANK, SVLUES, WORK, LWORK, INFO )
*
*     This code is part of a release of the package for computing
*     rank-revealing QR Factorizations written by:
*     ==================================================================
*     Christian H. Bischof        and   Gregorio Quintana-Orti
*     Math. and Comp. Sci. Div.         Departamento de Informatica
*     Argonne National Lab.             Universidad Jaime I
*     Argonne, IL 60439                 Campus P. Roja, 12071 Castellon
*     USA                               Spain
*     bischof@mcs.anl.gov               gquintan@inf.uji.es
*     ==================================================================
*     $Revision: 1.84 $
*     $Date: 96/12/30 16:59:13 $
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, RANK, LWORK, INFO
      DOUBLE PRECISION   IRCOND, ORCOND
*     ..
*     .. Array Arguments ..
      INTEGER            JPVT( * )
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ),
     $                   WORK( * ), SVLUES( 4 )
*     ..
*
*  Purpose
*  =======
*
*  DGEQPX computes a QR factorization
*       A*P = Q*[ R11 R12 ]
*               [  0  R22 ]
*  of a real m by n matrix A. The permutation P is
*  chosen with the goal to reveal the rank of A by a
*  suitably dimensioned trailing submatrix R22 with norm(R22)
*  being small.
*
*  Based on methods related to Chandrasekaran&Ipsen's algorithms.
*
*  Arguments
*  =========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  JPVT    (output) INTEGER array, dimension (N)
*          JPVT(I) = J <==> Column J of A has been permuted into
*                           position I in AP.
*          JPVT(1:RANK) contains the indices of the columns considered
*          linearly independent.
*          JPVT(RANK+1:N) contains the indices of the columns considered
*          linearly dependent from the previous ones.
*
*  IRCOND  (input) DOUBLE PRECISION
*          1/IRCOND specifies an upper bound on the condition number
*          of R11. If IRCOND == 0, IRCOND = machine precision is chosen
*          as default. IRCOND must be >= 0.
*
*  ORCOND  (output) DOUBLE PRECISION
*          1/ORCOND is an estimate for the condition number of R11.
*
*  RANK    (output) INTEGER
*          RANK is an estimate for the numerical rank of A with respect
*          to the threshold 1/IRCOND in the sense that
*               RANK = arg_max(cond_no(R(1:r,1:r))<1/IRCOND)
*
*  SVLUES  (output) DOUBLE PRECISION array, dimension (4)
*          On exit, SVLUES contains estimates of some of the
*          singular values of the triangular factor R.
*          SVLUES(1): largest singular value of R(1:RANK,1:RANK)
*          SVLUES(2): smallest singular value of R(1:RANK,1:RANK)
*          SVLUES(3): smallest singular value of R(1:RANK+1,1:RANK+1)
*          SVLUES(4): smallest singular value of R
*          If the triangular factorization is a rank-revealing one
*          (which will be the case if the leading columns were well-
*          conditioned), then SVLUES(1) will also be an estimate
*          for the largest singular value of A, SVLUES(2) and SVLUES(3)
*          will be estimates for the RANK-th and (RANK+1)-st singular
*          value of A, and SVLUES(4) will be an estimate for the
*          smallest singular value of A.
*          By examining these values, one can confirm that the rank is
*          well defined with respect to the threshold chosen.
*
*  WORK    (workspace) DOUBLE PRECISION array, dimension (LWORK)
*          On exit: work(1) is the size of the storage array needed
*                   for optimal performance
*
*  LWORK   (input) INTEGER
*          The dimension of array WORK.
*          If JOB=1:
*             The unblocked strategy requires that:
*                 LWORK >= 2*MN+3*N.
*             The block algorithm requires that:
*                 LWORK >= 2*MN+N*NB.
*          If JOB<>1:
*             The unblocked strategy requires that:
*                 LWORK >= 2*MN+2*N+MAX(K,N).
*             The block algorithm requires that:
*                 LWORK >= 2*MN+NB*NB+NB*MAX(K,N).
*          Where MN = min(M,N) and NB is the block size for this
*          environment.
*          In both cases, the minimum required workspace is the
*          one for the unblocked strategy.
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If INFO = -i, the i-th argument had an illegal value
*          > 0: Problems in the computation of the rank.
*                   1: Exceeded the allowed maximum number of steps.
*                   2: Rank not well defined.
*          In adition, vector SVLUES tell if rank is not well defined.
*
*  =====================================================================
*
*     .. Parameters ..
      DOUBLE PRECISION   ZERO
      PARAMETER          ( ZERO = 0.0D+0 )
*     ..
*     .. External Subroutines ..
      EXTERNAL           XERBLA, DGEQPB, DTRQPX
*     ..
*     .. Intrinsic Functions ..
      INTRINSIC          MIN, MAX
*     ..
*     .. Local Scalars ..
      DOUBLE PRECISION   WSIZE
      INTEGER            MN, WKMIN
*     ..
*     .. Executable Statements ..
*
      MN = MIN( M, N )
      IF( JOB.EQ.1 ) THEN
         WKMIN = 2*MN+3*N
      ELSE
         WKMIN = 2*MN+2*N+MAX(K,N)
      END IF
*
*     Test input arguments
*     ====================
*
      INFO = 0
      IF( ( JOB.LT.1 ).OR.( JOB.GT.3 ) ) THEN
         INFO = -1
      ELSE IF( M.LT.0 ) THEN
         INFO = -2
      ELSE IF( N.LT.0 ) THEN
         INFO = -3
      ELSE IF( K.LT.0 ) THEN
         INFO = -4
      ELSE IF( LDA.LT.MAX(1,M) ) THEN
         INFO = -6
      ELSE IF( ( ( JOB.EQ.1 ).AND.( LDC.LT.1 ) ).OR.
     $         ( ( JOB.EQ.2 ).AND.( LDC.LT.MAX( 1, M ) ) ).OR.
     $         ( ( JOB.EQ.3 ).AND.( LDC.LT.MAX( 1, K ) ) ) ) THEN
         INFO = -8
      ELSE IF( IRCOND.LT.ZERO ) THEN
         INFO = -10
      ELSE IF( LWORK.LT.MAX( 1, WKMIN ) ) THEN
         INFO = -15
      END IF
      IF( INFO.NE.0 ) THEN
         CALL XERBLA( 'DGEQPX',-INFO )
         RETURN
      END IF
*
*     Preprocessing
*     =============
*
      CALL DGEQPB( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,
     $             ORCOND, RANK, SVLUES, WORK, LWORK, INFO )
      WSIZE = WORK( 1 )
*
*     Postprocessing
*     ==============
*
      IF( RANK.GT.0 ) THEN
         CALL DTRQPX( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,
     $                ORCOND, RANK, SVLUES, WORK, LWORK, INFO )
      END IF
*
      WORK( 1 ) = WSIZE
      RETURN
*
*     End of DGEQPX
*
      END
```


---

# Source Code for RRQR (Hybrid-III) - DTRQXC

```fortran-free-form {27-37|189-192|196-208|222-255|256-296|297-329}{lines:true,maxHeight:'400px'}
SUBROUTINE DTRQXC( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                  RANK, SVLUES, RCNR, RCNRP1, WORK, INFO )
*
*     This code is part of a release of the package for computing
*     rank-revealing QR Factorizations written by:
*     ==================================================================
*     Christian H. Bischof        and   Gregorio Quintana-Orti
*     Math. and Comp. Sci. Div.         Departamento de Informatica
*     Argonne National Lab.             Universidad Jaime I
*     Argonne, IL 60439                 Campus P. Roja, 12071 Castellon
*     USA                               Spain
*     bischof@mcs.anl.gov               gquintan@inf.uji.es
*     ==================================================================
*     $Revision: 1.84 $
*     $Date: 96/12/30 16:59:20 $
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, RANK, INFO
      DOUBLE PRECISION   RCNR, RCNRP1
*     ..
*     .. Array Arguments ..
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * ),
     $                   SVLUES( 4 )
      INTEGER            JPVT( * )
*     ..
*
*  Purpose
*  =======
*
*  DTRQXC carries out an algorithm related to algorithm Hybrid-III
*  by Chandrasekaran and Ipsen for the stage RANK. The algorithm used
*  here offers the following advantages:
*  o It is faster since it is based on Chan-II instead of Stewart-II.
*  o This algorithm uses the F factor technique to reduce the number of
*    cycling problems due to roundoff errors.
*  o The final steps that do not improve the ordering are saved.
*
*  Arguments
*  =========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  JPVT    (input/output) INTEGER array, dimension ( N )
*          If JPVT(I) = K, then the Ith column of the permuted
*          A was the Kth column of the original A (just before
*          the preprocessing). If a permutation occurs, JPVT will
*          be updated correctly.
*
*  RANK    (input) INTEGER
*          Th estimate of the rank. 1 <= RANK <= MIN(M,N).
*
*  SVLUES  (output) DOUBLE PRECISION array, dimension (4)
*          On exit, SVLUES contains estimates of some of the
*          singular values of the triangular factor R.
*          SVLUES(1): largest singular value of R(1:RANK,1:RANK)
*          SVLUES(2): smallest singular value of R(1:RANK,1:RANK)
*          SVLUES(3): smallest singular value of R(1:RANK+1,1:RANK+1)
*          SVLUES(4): smallest singular value of R
*          If the triangular factorization is a rank-revealing one
*          (which will be the case if the leading columns were well-
*          conditioned), then SVLUES(1) will also be an estimate
*          for the largest singular value of A, SVLUES(2) and SVLUES(3)
*          will be estimates for the RANK-th and (RANK+1)-st singular
*          value of A, and SVLUES(4) will be an estimate for the
*          smallest singular value of A.
*          By examining these values, one can confirm that the rank is
*          well defined with respect to the threshold chosen.
*
*  RCNR    (output) DOUBLE PRECISION
*          Th estimate for the inverse of the condition number of block
*          R(1:RANK,1:RANK).
*
*  RCNRP1  (output) DOUBLE PRECISION
*          Th estimate for the inverse of the condition number of block
*          R(1:RANK+1,1:RANK+1).
*
*  WORK    (workspace) DOUBLE PRECISION array,
*             dimension ( MN+MAX(N,2*MN) ), where MN=MIN(M,N).
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If info = -i, the i-th argument had an illegal value.
*          = 1: Exceeded the allowed maximum number of steps. That is,
*               the matrix presents a slow convergence.
*
*
*  ===================================================================
*
*     .. Parameters ..
      DOUBLE PRECISION   ONE, F
      PARAMETER          ( F = 0.5D+0, ONE = 1.0D+0 )
*
*     Indices into the 'svlues' array.
*
      INTEGER            IMAX, IBEFOR, IAFTER, IMIN
      PARAMETER          ( IMAX = 1, IBEFOR = 2, IAFTER = 3, IMIN = 4 )
*     ..
*     .. Local Scalars ..
      DOUBLE PRECISION   COSINE, SINE, SMAX, SMAXPR, SMIN, SMINPR,
     $                   SMXRP1
      LOGICAL            PERMUT
      INTEGER            J, MN, MXSTPS, NACPTD
      INTEGER            NS
*     ..
*     .. External Subroutines ..
      EXTERNAL           DSCAL
*     ..
*     .. External Functions ..
      INTEGER            IDAMAX
      DOUBLE PRECISION   DLASMX, DNRM2
      EXTERNAL           IDAMAX, DLASMX, DNRM2
*     ..
*     .. Intrinsic Functions ..
      INTRINSIC          MAX, MIN
*     ..
*     .. Executable Statements ..
*
      MN = MIN( M, N )
      NS = 0
      MXSTPS = N + 25
      INFO = 0
*
*     Quick return if possible.
*
      IF( MN.EQ.0 )
     $   RETURN
*
*     Inicialization of variable NACPTD, which controls main loop.
*
      NACPTD = 0
*
*     Compute the norms of block A(1:RANK,1:RANK) and store them
*     in vector WORK(1:RANK). It is computed only once at the
*     beginning and updated every iteration. It is used to estimate
*     the largest singular value in order to pass it to Chan-II.
*
      DO 10 J = 1, RANK
         WORK( J ) = DNRM2( J, A( 1, J ), 1 )
 10   CONTINUE
*
*     *****************
*     * start of loop *
*     *****************
*
 20   CONTINUE
*
*     *-*-*-*-*-*-*-*-*-*-*-*-*
*     * call to Golub-I(rank) *
*     *-*-*-*-*-*-*-*-*-*-*-*-*
*
      IF( NACPTD.LT.4 ) THEN
*
*        Apply Golub-I for the stage RANK.
*
         CALL DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                F, RANK, PERMUT, WORK( MN+1 ), INFO )
*
*        If necessary, update the contents of WORK(RANK).
*
         IF( PERMUT )
     $      WORK( RANK ) = DNRM2( RANK, A( 1, RANK ), 1 )
*
*        Update variables NACPTD and NS.
*
         IF( PERMUT ) THEN
            NACPTD = 1
         ELSE
            NACPTD = NACPTD+1
         END IF
         NS = NS + 1
      END IF
*
*     *-*-*-*-*-*-*-*-*-*-*-*-*-*
*     * call to Golub-I(rank+1) *
*     *-*-*-*-*-*-*-*-*-*-*-*-*-*
*
      IF( NACPTD.LT.4 ) THEN
*
*        Determine if the application of Golub-I(rank+1) is necessary.
*
         IF( RANK.EQ.MN ) THEN
*
*           Not necessary. Therefore, no permutation occurs.
*
            PERMUT = .FALSE.
         ELSE
*
*           Apply Golub-I for the stage RANK+1.
*
            CALL DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                   F, RANK+1, PERMUT, WORK( MN+1 ), INFO )
*
*           Update variable NS.
*
            NS = NS+1
         END IF
*
*        Update variable NACPTD.
*
         IF( PERMUT ) THEN
            NACPTD = 1
         ELSE
            NACPTD = NACPTD+1
         END IF
      END IF
*
*     *-*-*-*-*-*-*-*-*-*-*-*-*-*
*     * call to Chan-II (rank+1)*
*     *-*-*-*-*-*-*-*-*-*-*-*-*-*
*
      IF( NACPTD.LT.4 ) THEN
*
*        Determine if the application of Chan-II(rank+1) is necessary.
*
         IF( RANK.EQ.MN ) THEN
*
*           Not necessary. Therefore, no permutation occurs.
*
            PERMUT = .FALSE.
         ELSE
*
*           Extend vector WORK(1:RANK) to vector WORK(1:RANK+1).
*           So, pivoting vector WORK(1:N) inside Chan-II will be
*           easier.
*
            WORK( RANK+1 ) = DNRM2( RANK+1, A( 1, RANK+1 ), 1 )
*
*           Apply Chan-II for the stage RANK+1
*           on block A(1:RANK+1,1:RANK+1).
*
            CALL DCNIIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                   WORK, F, RANK+1, PERMUT, WORK( MN+1 ), INFO )
*
*           Update variable NS.
*
            NS = NS+1
         END IF
*
*        Update variable NACPTD.
*
         IF( PERMUT ) THEN
            NACPTD = 1
         ELSE
            NACPTD = NACPTD+1
         END IF
      END IF
*
*     *-*-*-*-*-*-*-*-*-*-*-*-*
*     * call to Chan-II(rank) *
*     *-*-*-*-*-*-*-*-*-*-*-*-*
*
      IF( NACPTD.LT.4 ) THEN
*
*        Apply Chan-II for the stage RANK on block A(1:RANK,1:RANK).
*
         CALL DCNIIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                WORK, F, RANK, PERMUT, WORK( MN+1 ), INFO )
*
*        Update variables NACPTD and NS.
*
         IF( PERMUT ) THEN
            NACPTD = 1
         ELSE
            NACPTD = NACPTD+1
         END IF
         NS = NS + 1
      END IF
*
*     Check if loop must finish.
*
      IF( NS.GE.MXSTPS ) THEN
         INFO = 1
      ELSE IF( NACPTD.LT.4 ) THEN
         GOTO 20
      END IF
*
*     ***************
*     * end of loop *
*     ***************
*
*     **************************************************************
*     * Computation of vector SVLUES and variables RCNR and RCNRP1 *
*     **************************************************************
*
*     Computation of the largest singular value and the smallest
*     singular value of A(1:RANK,1:RANK).
*
      SMAX = ABS( A( 1, 1 ) )
      WORK( 1 ) = ONE
      SMIN = SMAX
      WORK( MN+1 ) = ONE
*
      DO 30 J = 2, RANK
         CALL DLAIC1( 1, J-1, WORK( 1 ), SMAX,
     $                A( 1, J ), A( J, J ), SMAXPR, SINE, COSINE )
         CALL DSCAL( J-1, SINE, WORK( 1 ), 1 )
         WORK( J ) = COSINE
         SMAX = SMAXPR
         CALL DLAIC1( 2, J-1, WORK( MN+1 ), SMIN,
     $                A( 1, J ), A( J, J ), SMINPR, SINE, COSINE )
         CALL DSCAL( J-1, SINE, WORK( MN+1 ), 1 )
         WORK( MN+J ) = COSINE
         SMIN = SMINPR
 30   CONTINUE
      SVLUES( IMAX ) = SMAX
      SVLUES( IBEFOR ) = SMIN
*
*     Computation of the largest singular value and the smallest
*     singular value of A(1:RANK+1,1:RANK+1).
*
      IF( RANK.LT.MN ) THEN
         CALL DLAIC1( 1, RANK, WORK( 1 ), SMAX,
     $                A( 1, RANK+1 ), A( RANK+1, RANK+1 ), SMAXPR,
     $                SINE, COSINE )
         SMAX = SMAXPR
         CALL DLAIC1( 2, RANK, WORK( MN+1 ), SMIN,
     $                A( 1, RANK+1 ), A( RANK+1, RANK+1 ), SMINPR,
     $                SINE, COSINE )
         CALL DSCAL( RANK, SINE, WORK( MN+1 ), 1 )
         WORK( MN+RANK+1 ) = COSINE
         SMIN = SMINPR
      END IF
      SMXRP1 = SMAX
      SVLUES( IAFTER ) = SMIN
*
*     Computation of the smallest singular value of A(1:MN,1:MN).
*
      DO 40 J = RANK+2, MN
         CALL DLAIC1( 2, J-1, WORK( MN+1 ), SMIN,
     $                A( 1, J ), A( J, J ), SMINPR, SINE, COSINE )
         CALL DSCAL( J-1, SINE, WORK( MN+1 ), 1 )
         WORK( MN+J ) = COSINE
         SMIN = SMINPR
 40   CONTINUE
      SVLUES( IMIN ) = SMIN
*
*     Computation of RCNR and RCNRP1.
*
      RCNR = SVLUES( IBEFOR ) / SVLUES( IMAX )
      RCNRP1 = SVLUES( IAFTER ) / SMXRP1
      RETURN
*
*     End of DTRQXC
*
      END
      SUBROUTINE DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,
     $                    F, RANK, PERMUT, WORK, INFO )
*
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, RANK, INFO
      DOUBLE PRECISION   F
      LOGICAL            PERMUT
*     ..
*     .. Array Arguments ..
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * )
      INTEGER            JPVT( * )
*     ..
*
*  Purpose
*  =======
*
*  DGLBIF computes the column index of A(RANK:M,RANK:N) with largest
*  norm and determines if pivoting is necessary. If so, it pivots it into
*  column RANK, permuts vector JPVT and permuts and retriangularizes
*  matrix A. It does only one permutation.
*
*  Arguments
*  =========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  JPVT    (input/output) INTEGER array, dimension ( N )
*          If JPVT(I) = K, then the Ith column of the permuted
*          A was the Kth column of the original A (just before the
*          preprocessing). If a permutation occurs, it will be
*          updated correctly.
*
*  F       (input) DOUBLE PRECISION
*          F factor for the pivoting. It must be always 0 < f <= 1.
*
*  RANK    (input) INTEGER
*          Th estimate for the rank. 1 <= RANK <= MIN(M,N).
*
*  PERMUT  (output) LOGICAL
*          Tells if a permutation occurred.
*
*  WORK    (workspace) DOUBLE PRECISION array,
*             dimension ( MAX( N, 2*MIN(M,N) ) )
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If info = -i, the i-th argument had an illegal value.
*
*  =====================================================================
*
*     .. Local Scalars ..
      INTEGER            MN, JJ, J, ITEMP
*     ..
*     .. Local Arrays ..
      DOUBLE PRECISION   RDUMMY( 1, 1 )
*     ..
*     .. External Subroutines ..
      EXTERNAL           DCOPY, DGRET
*     ..
*     .. External Functions ..
      INTEGER            IDAMAX
      DOUBLE PRECISION   DNRM2
      EXTERNAL           IDAMAX, DNRM2
*     ..
*     .. Executable Statements ..
*
      MN = MIN( M, N )
      INFO = 0
*
*     Quick return if possible.
*
      IF( ( MN.EQ.0 ).OR.( RANK.EQ.N ).OR.( RANK.EQ.0 ) ) THEN
         PERMUT = .FALSE.
         RETURN
      END IF
*
*     Compute the norms of the columns of block A(RANK:M,RANK:N)
*     and store them in vector WORK(RANK:N).
*
      DO 10 J = RANK, N
         WORK( J ) =
     $       DNRM2( MIN( M, J )-RANK+1, A( RANK, J ), 1 )
 10   CONTINUE
*
*     Find column with largest two-norm of upper triangular block
*     A(RANK:M,RANK:N). Use the data stored in vector WORK(RANK:N).
*
      JJ = RANK - 1 + IDAMAX( N-RANK+1, WORK( RANK ), 1)
*
*     Determine if a permutation must occur.
*
      PERMUT = ( ( JJ.GT.RANK ).AND.
     $         ( ( ABS( WORK( JJ ) )*F ).GT.ABS( WORK( RANK ) ) ) )
*
      IF( PERMUT ) THEN
*
*        Exchage cyclically to the right the columns of matrix A
*        between RANK and JJ. That is, RANK->RANK+1,
*        RANK+1->RANK+2,...,JJ-1->JJ,JJ->K. Use vector WORK(1:MN)
*        to store temporal data.
*
         CALL DCOPY( MIN( MN, JJ ), A( 1, JJ ), 1, WORK, 1 )
         DO 20 J = JJ-1, RANK, -1
            CALL DCOPY( MIN( MN, J+1 ), A( 1, J ), 1,
     $                  A( 1, J+1 ), 1 )
 20      CONTINUE
         CALL DCOPY( MIN( MN, JJ ), WORK, 1, A( 1, RANK ), 1 )
*
*        Exchange in the same way vector JPVT.
*
         ITEMP = JPVT( JJ )
         DO 30 J = JJ-1, RANK, -1
            JPVT( J+1 ) = JPVT( J )
 30      CONTINUE
         JPVT( RANK ) = ITEMP
*
*        Retriangularize matrix A after the permutation.
*
         IF( JOB.EQ.1 ) THEN
            CALL DGRET( JOB, MIN( M, JJ )-RANK+1, N-RANK+1, K,
     $                  A( RANK, RANK ), LDA, RDUMMY, 1,
     $                  WORK, INFO )
         ELSE IF( JOB.EQ.2 ) THEN
            CALL DGRET( JOB, MIN( M, JJ )-RANK+1, N-RANK+1, K,
     $                  A( RANK, RANK ), LDA, C( RANK, 1 ), LDC,
     $                  WORK, INFO )
         ELSE IF( JOB.EQ.3 ) THEN
            CALL DGRET( JOB, MIN( M, JJ )-RANK+1, N-RANK+1, K,
     $                  A( RANK, RANK ), LDA, C( 1, RANK ), LDC,
     $                  WORK, INFO )
         END IF
      END IF
      RETURN
*
*     End of DGLBIF
*
      END
      SUBROUTINE DCNIIF( JOB, M, N, K, A, LDA, C, LDC, JPVT, VNORM,
     $                   F, RANK, PERMUT, WORK, INFO )
*
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, RANK, INFO
      DOUBLE PRECISION   F
      LOGICAL            PERMUT
*     ..
*     .. Array Arguments ..
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), VNORM( * ), WORK( * )
      INTEGER            JPVT( * )
*     ..
*
*  Purpose
*  =======
*
*  DCNIIF computes the "worst" column in A(1:RANK,1:RANK) and
*  determines if pivoting is necessary. If so, it pivots it into column
*  RANK, permuts vector JPVT, adjusts vector VNORM and permuts and
*  retriangularizes matrix A. It does only one permutation.
*
*  Arguments
*  =========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  JPVT    (input/output) INTEGER array, dimension (N)
*          If JPVT(I) = K, then the Ith column of the permuted
*          A was the Kth column of the original A (just before the
*          preprocessing). If a permutation occurs, this vector will
*          be updated correctly.
*
*  VNORM   (input/output) DOUBLE PRECISION array, dimension ( N )
*          VNORM(1:RANK) contains the norms of the columns of upper
*          triangular block A(1:RANK,1:RANK). If a permutation occurs,
*          this vector will be updated correctly.
*
*  F       (input) DOUBLE PRECISION
*          F factor for the pivoting. It must be always 0 < f <= 1.
*
*  RANK    (input) INTEGER
*          Th estimate for the rank. 1 <= RANK <= MIN(M,N).
*
*  PERMUT  (output) LOGICAL
*          Tells if a permutation occurred.
*
*  WORK    (workspace) DOUBLE PRECISION array, dimension ( 2*MIN(M,N) )
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If info = -i, the i-th argument had an illegal value.
*
*  Further Details
*  ===============
*
*    If block R(1:RANK,1:RANK) is singular or near singular, there will
*  be no permutation because in that case the right (and left) singular
*  vectors are the canonical ones ((0,0,...0,1)^T).
*    That is, there will not be permutation if
*  RCOND <= SF * DLAMCH('Safe Minimum'), where SF (Safe Factor) is
*  a security factor to avoid arithmetic exceptions.
*
*  =====================================================================
*
*     .. Parameters ..
      DOUBLE PRECISION   SF, ONE
      PARAMETER          ( SF = 1.0D+2, ONE = 1.0D+0 )
*     ..
*     .. Local Scalars ..
      INTEGER            MN, JJ, J, ITEMP
      DOUBLE PRECISION   SMAX, SMIN, SMINPR, SINE, COSINE, TEMP ,
     $                   RDUMMY( 1 )
*     ..
*     .. External Subroutines ..
      EXTERNAL           DCOPY, DTRSV, DHESS
*     ..
*     .. External Functions ..
      INTEGER            IDAMAX
      DOUBLE PRECISION   DNRM2, DLAMCH, DLASMX
      EXTERNAL           IDAMAX, DNRM2, DLAMCH, DLASMX
*     ..
*     .. Executable Statements ..
*
      MN = MIN( M, N )
      INFO = 0
*
*     Quick return if possible.
*
      IF( ( MN.EQ.0 ).OR.( RANK.EQ.1 ) ) THEN
         PERMUT = .FALSE.
         RETURN
      END IF
*
*     Estimation of the largest singular value of block
*     A(1:RANK,1:RANK) by using the contents of vector
*     VNORM.
*
      ITEMP = IDAMAX( RANK, VNORM, 1 )
      SMAX = DLASMX( RANK ) * VNORM( ITEMP )
*
*     Estimation of the smallest singular value of block
*     A(1:RANK,1:RANK) and its corresponding left singular vector.
*     Save left singular vector in vector WORK(1:RANK).
*
      SMIN = ABS( A( 1, 1 ) )
      WORK( 1 ) = ONE
      DO 10 J = 2, RANK
         CALL DLAIC1( 2, J-1, WORK( 1 ), SMIN, A( 1, J ),
     $                A( J , J ), SMINPR, SINE, COSINE )
         CALL DSCAL( J-1, SINE, WORK( 1 ), 1 )
         WORK( J ) = COSINE
         SMIN = SMINPR
 10   CONTINUE
*
*     Determine if matrix A(1:RANK,1:RANK) is singular or nearly
*     singular. SF (Safe Factor) is used to say if it is singular or not.
*
      IF( SMIN.LE.( SMAX*SF*DLAMCH( 'Safe minimum' ) ) ) THEN
*
*        Singular or nearly singular matrix. Its right singular
*        vector is (0,0,...,0,1)^T. So, no pivoting is needed.
*
         PERMUT = .FALSE.
      ELSE
*
*        Follow usual method: Estimate the right singular vector
*        corresponding to the smallest singular value of upper
*        triangular block A(1:RANK,1:RANK) and put into vector
*        WORK(1:RANK).
*
         CALL DTRSV( 'Upper', 'No transpose', 'No unit',
     $                RANK, A, LDA, WORK, 1)
*
*        Find the index with largest absolute value in vector
*        WORK(1:RANK).
*
         JJ = IDAMAX( RANK, WORK, 1 )
*
*        Determine if a permutation must occur.
*
         PERMUT = ( ( JJ.LT.RANK ).AND.
     $          ( ( ABS( WORK( JJ ) )*F ).GT.ABS( WORK( RANK ) ) ) )
*
         IF( PERMUT ) THEN
*
*           Exchange cyclically to the left the colums of matrix A
*           between JJ and RANK. That is, JJ->RANK,JJ+1->JJ,...,
*           RANK->RANK-1. Use vector WORK to store temporal data.
*
            CALL DCOPY( RANK, A( 1, JJ ), 1, WORK, 1 )
            DO 20 J = JJ+1, RANK
               CALL DCOPY( J, A( 1, J ), 1, A( 1, J-1 ), 1 )
 20         CONTINUE
            CALL DCOPY( RANK, WORK, 1, A( 1, RANK ), 1 )
*
*           Exchange in the same way vector JPVT.
*
            ITEMP = JPVT( JJ )
            DO 30 J = JJ+1, RANK
                JPVT( J-1 ) = JPVT( J )
 30         CONTINUE
            JPVT( RANK ) = ITEMP
*
*           Adjust the contents of VNORM.
*
            TEMP = VNORM( JJ )
            DO 40 J = JJ+1, RANK
               VNORM( J-1 ) = VNORM( J )
 40         CONTINUE
            VNORM( RANK ) = TEMP
*
*           Retriangularize matrix A after the permutation.
*
            IF( JOB.EQ.1 ) THEN
               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,
     $                     A( JJ, JJ ), LDA, RDUMMY, 1,
     $                     WORK, INFO )
            ELSE IF( JOB.EQ.2 ) THEN
               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,
     $                     A( JJ, JJ ), LDA, C( JJ, 1 ), LDC,
     $                     WORK, INFO )
            ELSE IF( JOB.EQ.3 ) THEN
               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,
     $                     A( JJ, JJ ), LDA, C( 1, JJ ), LDC,
     $                     WORK, INFO )
            END IF
         END IF
      END IF
      RETURN
*
*     End of DCNIIF
*
      END
      SUBROUTINE DGRET( JOB, M, N, K, A, LDA, C, LDC, WORK, INFO )
*
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, INFO
*     ..
*     .. Array Arguments ..
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * )
*     ..
*
*  Purpose
*  =======
*
*  DGRET retriangularizes a special matrix. This has the following
*  features: its first column is non-zero and its main diagonal is zero
*  except the first element. Now it is showed a 4 by 8 small example:
*                           x x x x x x x x
*                           x 0 x x x x x x
*                           x 0 0 x x x x x
*                           x 0 0 0 x x x x
*  This subroutine assumes that in all cases N>=M.
*  The orthogonal transformations applied to matrix A can be also
*  applied to matrix C.
*
*  Parameters
*  ==========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  WORK    (workspace) DOUBLE PRECISION array, dimension ( 2*M )
*          If the block algorithm is used, the size of this workspace
*          must be ( 2*M ).
*          In this case this vector will contain the sines and cosines
*          of the angles of the Givens Rotations to be applied.
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If info = -i, the i-th argument had an illegal value.
*
*  =====================================================================
*
*     .. Parameters ..
      DOUBLE PRECISION   ZERO
      PARAMETER          ( ZERO = 0.0D+0 )
*     ..
*     .. Common Blocks ..
      INTEGER            NB
      COMMON             /BSPRQR/ NB
*     ..
*     .. Local Scalars ..
      INTEGER            I, J, JB, ITEMP
      DOUBLE PRECISION   R, COSINE, SINE
*     ..
*     .. External Subroutines ..
      EXTERNAL           DLARTG, DROT
*     ..
*     .. Intrinsic Functions ..
      INTRINSIC          MIN
*     ..
*     .. Executable Statements ..
*
      INFO = 0
*
*     Quick return if possible.
*
      IF( ( M.EQ.0 ).OR.( M.EQ.1 ).OR.( N.EQ.0 ) )
     $   RETURN
      IF( NB.GT.1 ) THEN
*
*        Block Algorithm
*        ===============
*
*        Compute Givens Rotations needed to nullify the first column
*        of matrix A and apply on the fly to that column. Store
*        temporally the sine and cosine of the angles of the applied
*        Givens Rotations in vector WORK.
*
         DO 10 I = M, 2, -1
            CALL DLARTG( A( I-1, 1 ), A( I, 1 ),
     $                   WORK( I ), WORK( M+I ), R )
            A( I-1, 1 ) = R
            A( I, 1 ) = ZERO
 10      CONTINUE
*
*        Apply the previously computed Givens Rotations to the rest
*        of matrix A.
*
         DO 20 J = 2, N, NB
            JB = MIN( NB, N-J+1 )
            DO 30 I = MIN( M, J+JB-1 ), J, -1
               CALL DROT( J+JB-I, A( I-1, I ), LDA, A( I, I ), LDA,
     $                    WORK( I ), WORK( M+I ) )
 30         CONTINUE
            DO 40 I = MIN( M, J-1 ), 2, -1
               CALL DROT( JB, A( I-1, J ), LDA, A( I, J ), LDA,
     $                    WORK( I ), WORK( M+I ) )
 40         CONTINUE
 20      CONTINUE
*
*        Update the corresponding part of matrix C.
*
         IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN
*
*           Apply the previously computed rotations from the left.
*
            DO 50 J = 1, K, NB
               JB = MIN( NB, K-J+1 )
               DO 60 I = M, 2, -1
                  CALL DROT( JB, C( I-1, J ), LDC, C( I, J ), LDC,
     $                      WORK( I ), WORK( M+I ) )
 60            CONTINUE
 50         CONTINUE
         ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN
*
*           Apply the transpose of the previously computed rotations
*           from the right.
*
            DO 70 I = M, 2, -1
               CALL DROT( K, C( 1, I-1 ), 1, C( 1, I ), 1,
     $                   WORK( I ), WORK( M+I ) )
 70         CONTINUE
         END IF
      ELSE
*
*        Non-Block Algorithm
*        ===================
*
         DO 90 I = M, 2, -1
            ITEMP = I - 1
*
*           Compute the rotation parameters and update column 1 of A.
*
            CALL DLARTG( A( ITEMP, 1 ), A( I , 1 ), COSINE, SINE, R )
            A( ITEMP, 1 ) = R
            A( I, 1 ) = ZERO
*
*           Update columns I:N of matrix A.
*
            CALL DROT( N-I+1, A( ITEMP, I ), LDA, A( I, I ), LDA,
     $                 COSINE, SINE )
*
*           Update the corresponding part of matrix C.
*
            IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN
*
*              Apply the previously computed rotations from the left.
*
               CALL DROT( K, C( ITEMP, 1 ), LDC, C( I, 1 ), LDC,
     $                     COSINE, SINE )
            ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN
*
*              Apply the transpose of the previously computed rotations
*              from the right.
*
               CALL DROT( K, C( 1, ITEMP ), 1, C( 1, I ), 1,
     $                     COSINE, SINE )
            END IF
 90      CONTINUE
      END IF
      RETURN
*
*     End of DGRET
*
      END
      SUBROUTINE DHESS( JOB, M, N, K, A, LDA, C, LDC, WORK, INFO )
*
*
*     .. Scalar Arguments ..
      INTEGER            JOB, M, N, K, LDA, LDC, INFO
*     ..
*     .. Array Arguments ..
      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * )
*     ..
*
*  Purpose
*  =======
*
*  DHESS reduces the upper hessemberg matrix A to upper triangular form.
*  applied to matrix C if argument JOB asks.
*  This subroutine assumes that in all cases N>=M.
*
*  Parameters
*  ==========
*
*  JOB     (input) INTEGER
*          The job to do:
*          = 1: The orthogonal transformations needed in the
*               triangularization are only applied to matrix A.
*               Thus, matrix C is not updated.
*          = 2: The same orthogonal transformations needed in the
*               triangularization of matrix A are applied to
*               matrix C from the left.
*               That is, if Q'*A*P=R, then C := Q'*C.
*               In this case, matrix C is m-by-k.
*          = 3: The transpose of the orthogonal transformations needed
*               in the triangularization of matrix A are applied
*               to matrix C from the right.
*               That is, if Q'*A*P=R, then C := C*Q.
*               In this case, matrix C is k-by-m.
*          In these three cases, the permutations are always stored
*          in vector JPVT.
*
*  M       (input) INTEGER
*          The number of rows of matrices A. M >= 0.
*          If JOB=2, M is the number of rows of matrix C.
*          If JOB=3, M is the number of columns of matrix C.
*
*  N       (input) INTEGER
*          The number of columns of matrix A.  N >= 0.
*
*  K       (input) INTEGER
*          It defines the dimension of matrix C. K >= 0.
*          If JOB=2, K is the number of columns of matrix C.
*          If JOB=3, K is the number of rows of matrix C.
*
*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)
*          On entry, the m by n matrix A.
*          On exit, the upper triangle of the array contains the
*          min(m,n) by n upper trapezoidal matrix R; the lower triangle
*          array is filled with zeros.
*
*  LDA     (input) INTEGER
*          The leading dimension of array A. LDA >= max(1,M).
*
*  C       (input/output) DOUBLE PRECISION array, dimension
*                ( LDC, K ) if JOB=2.
*                ( LDC, M ) if JOB=3.
*          If argument JOB asks, all the orthogonal transformations
*          applied to matrix A are also applied to matrix C.
*
*  LDC     (input) INTEGER
*          The leading dimension of array C.
*          If JOB=2, then LDC >= MAX(1,M).
*          If JOB=3, then LDC >= MAX(1,K).
*
*  WORK    (workspace) DOUBLE PRECISION array, dimension ( 2*M )
*          If the block algorithm is used, the size of this workspace
*          must be ( 2*M ).
*          In this case this vector will contain the sines and cosines
*          of the angles of the Givens Rotations to be applied.
*
*  INFO    (output) INTEGER
*          = 0: Successful exit.
*          < 0: If info = -i, the i-th argument had an illegal value.
*
*  =====================================================================
*
*     .. Parameters ..
      DOUBLE PRECISION   ZERO
      PARAMETER          ( ZERO = 0.0D+0 )
*     ..
*     .. Common Blocks ..
      INTEGER            NB
      COMMON             /BSPRQR/ NB
*     ..
*     .. Local Scalars ..
      INTEGER            I, J, ITEMP, JB
      DOUBLE PRECISION   R, COSINE, SINE
*     ..
*     .. External Subroutines ..
      EXTERNAL           DLARTG, DROT
*     ..
*     .. Intrinsic Functions ..
      INTRINSIC          MIN
*     ..
*     .. Executable Statements ..
*
      INFO = 0
*
*     Quick return if possible.
*
      IF( ( M.EQ.0 ).OR.( M.EQ.1 ).OR.( N.EQ.0 ) )
     $   RETURN
      IF( NB.GT.1 ) THEN
*
*        Block Algorithm
*        ===============
*
*        Compute Givens Rotations needed to reduce upper hessenberg
*        matrix A to triangular form, and apply on the fly those
*        rotations to matrix. Store temporally the sine and cosine
*        of the angles of the applied Givens Rotations in vector WORK.
*
         DO 10 J = 1, N, NB
            JB = MIN( NB, N-J+1 )
            DO 20 I = 2, MIN( M, J )
               CALL DROT( JB, A( I-1, J ), LDA, A( I, J ), LDA,
     $                    WORK( I ), WORK( M+I ) )
 20         CONTINUE
            DO 30 I = J+1, MIN( M, J+JB )
               ITEMP = I-1
               CALL DLARTG( A( ITEMP, ITEMP ), A( I, ITEMP ),
     $                      WORK( I ), WORK( M+I ), R )
               A( ITEMP, ITEMP ) = R
               A( I, ITEMP ) = ZERO
               CALL DROT( J+JB-I, A( ITEMP, I ), LDA,
     $                    A( I, I ), LDA,
     $                    WORK( I ), WORK( M+I ) )
 30         CONTINUE
 10      CONTINUE
*
*        Update the corresponding part of matrix C.
*
         IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN
*
*           Apply the previously computed rotations from the left.
*
            DO 40 J = 1, K, NB
               JB = MIN( NB, K-J+1 )
               DO 50 I = 2, M
                  CALL DROT( JB, C( I-1, J ), LDC, C( I, J ), LDC,
     $                       WORK( I ), WORK( M+I ) )
 50            CONTINUE
 40         CONTINUE
         ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN
*
*           Apply the transpose of the previously computed rotations
*           from the right.
*
            DO 60 I = 2, M
               CALL DROT( K, C( 1, I-1 ), 1, C( 1, I ), 1,
     $                    WORK( I ), WORK( M+I ) )
 60         CONTINUE
         END IF
      ELSE
*
*        Non-Block Algorithm
*        ===================
*
         DO 80 I = 2, M
            ITEMP = I - 1
*
*           Compute the rotation parameters.
*
            CALL DLARTG( A( ITEMP, ITEMP ), A( I, ITEMP ),
     $                   COSINE, SINE, R )
*
*           Update columns I-1:N of matrix A.
*
            A( ITEMP, ITEMP ) = R
            A( I, ITEMP ) = ZERO
            CALL DROT( N-I+1, A( ITEMP, I ), LDA, A( I, I ), LDA,
     $                 COSINE, SINE )
*
*           Update the corresponding part of matrix C.
*
            IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN
*
*              Apply the previously computed rotations from the left.
*
               CALL DROT( K, C( ITEMP, 1 ), LDC, C( I, 1 ), LDC,
     $                    COSINE, SINE )
            ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN
*
*              Apply the transpose of the previously computed rotations
*              from the right.
*
               CALL DROT( K, C( 1, ITEMP ), 1, C( 1, I ), 1,
     $                    COSINE, SINE )
            END IF
 80      CONTINUE
      END IF
      RETURN
*
*     End of DHESS
*
      END
```

---

# Results of RRQR (Hybrid-III) on Kahan-300

```md {1-3|9|11-15|17-32}{lines:true,maxHeight:'500px'}
Using N = 300, 
ZETA =  0.98999999999999999, 
PHI =  0.14106735979665894     
 
Manually setting LWORK =        6000

DGEQPX completed successfully. INFO = 0

Estimated Rank:         299
Estimated 1/Condition Number (ORCOND):   6.7765114881254140E-003
Singular Value Estimates (SVLUES):
Largest sv of R(1:rank, 1:rank) :   8.1977121027954070     
Smallest sv of R(1:rank, 1:rank):   5.5551890240937818E-002
Smallest sv of R(1:rank+1,...)  :   1.4564885271037692E-018
Smallest sv of R                :   1.4564885271037692E-018
 
Pivot Vector (JPVT):          
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 21 22 24 28 31 29 30 27 39 32 
26 33 34 35 25 36 37 38 40 41 42 43 44 45 46 23 47 48 49 50 51 52 53 54 55 
56 57 58 59 60 63 61 62 64 66 65 67 68 69 70 71 72 73 74 75 76 77 78 79 80 
81 82 83 84 85 86 87 88 89 90 91 92 93 95 94 96 97 98 99 100 101 102 103 104 
105 106 107 109 108 111 110 117 112 113 114 115 116 118 121 119 120 124 122 
123 127 125 126 128 130 129 131 137 132 133 134 135 136 149 138 139 140 141 
142 143 144 145 146 147 148 150 151 152 153 154 155 156 157 158 159 160 161 
162 163 164 165 166 167 168 170 169 171 172 173 175 174 176 177 178 180 179 
181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 
200 205 201 202 203 204 206 207 208 209 210 211 212 213 214 215 216 217 218 
219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 
252 238 239 240 241 242 243 244 245 246 247 248 249 250 251 253 255 254 256 
259 257 258 260 261 262 263 264 265 266 267 268 269 270 271 272 273 275 274 
277 276 280 278 279 284 281 282 283 287 285 286 291 288 289 290 292 293 294 
295 296 298 297 299 20 300 1

```

---
layout: fact
---


# On Extended Kahan, RRQR fails to reveal rank.

<v-click> <h2>But we'll motivate the need for SRRQR differently. </h2> </v-click>

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

## Therefore, it would make sense to bound this, if we want a minimum norm, stable solution

---
layout: image
image: public/Presentation-1.png
---
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

# Repurposing a MATLAB Implementation for Algorithm-4

```matlab {1-23|22-24|25-31|68-84|87-89|94-95|103-104|112-118|120-142|144-165|167-186|187-210|211-224|226-229}{lines:true,maxHeight:'500px'}
function [Q, R, p] = sRRQR_rank(A, f, k)

%
%   Strong Rank Revealing QR with fixed rank 'k'
%
%       A(:, p) = Q * R = Q [R11, R12; 
%                              0, R22]
%   where R11 and R12 satisfies that matrix (inv(R11) * R12) has entries
%   bounded by a pre-specified constant which should be not less than 1. 
%   
%   Input: 
%       A, matrix,  target matrix that is appoximated.
%       f, scalar,  constant that bound the entries of calculated (inv(R11) * R12)%    
%       k, integer, dimension of R11. 
%
%   Output: 
%       A(:, p) = [Q1, Q2] * [R11, R12; 
%                               0, R22]
%               approx Q1 * [R11, R12];
%       Only truncated QR decomposition is returned as 
%           Q = Q1, 
%           R = [R11, R12];
%       where Q is a m * k matrix and R is a k * n matrix
%   
%   Reference: 
%       Gu, Ming, and Stanley C. Eisenstat. "Efficient algorithms for 
%       computing a strong rank-revealing QR factorization." SIAM Journal 
%       on Scientific Computing 17.4 (1996): 848-869.
%
%   Note: 
%       Algorithm 4 in the above ref. is implemented.




%   check constant bound f
if f < 1
    fprintf('parameter f given is less than 1. Automatically set f = 2\n');
    f = 2;
end

%   dimension of the given matrix
[m, n] = size(A);

%   modify rank k if necessary
k = min([k, m, n]);
    
%   pivoting QR first (generally most time consuming step)
[Q, R, p] = qr(A, 0);

%   check special case
if (k == n)
    fprintf('Rank equals the number of columns!\n');
    return ;
end


%   The following codes are the major part of the strong rank-revealing
%   algorithm which is based on the above pivoting QR. 
%   Name of variables are from the reference paper. 

%   make diagonals of R positive.
if (size(R,1) == 1 || size(R,2) == 1)
    ss = sign(R(1,1));
else
    ss = sign(diag(R));
end
R = bsxfun(@times, R, reshape(ss, [], 1));
Q = bsxfun(@times, Q, reshape(ss, 1, []));

%   Initialization of A^{-1}B ( A refers to R11, B refers to R12)
AB = linsolve(R(1:k, 1:k), R(1:k, (k+1):end), struct('UT', true)); 

%   Initialization of gamma, i.e., norm of C's columns (C refers to R22)
gamma = zeros(n-k, 1);                                    
if k ~= size(R,1)
    gamma = (sum(R((k+1):end, (k+1):end).^2, 1).^(1/2))';
end

%   Initialization of omega, i.e., reciprocal of inv(A)'s row norm 
tmp = linsolve(R(1:k, 1:k), eye(k), struct('UT', true));
% disp("max");
% disp(abs(max(AB(:))));
omega = sum(tmp.^2, 2).^(-1/2);                            


%   KEY STEP in Strong RRQR: 
%   "while" loop for interchanging the columns from first k columns and 
%   the remaining (n-k) columns.
counter = 0;
while 1
    disp(p([1,10]));
    %   identify interchanging columns
    tmp = (1./omega * gamma').^2 + AB.^2;
    [i,j] = find(tmp > f*f, 1, 'first');
    %disp(i);
    %disp(j);
    disp("max");
    disp(abs(max(AB(:))));
    counter = counter +1;
    %   if no entry of tmp greater than f*f, no interchange needed and the
    %   present Q, R, p is a strong RRQR. 
    if isempty(i)           
        break;
    end
    
%     fprintf('interchanging\n');
    
    %   Interchange the i th and (k+j) th column of target matrix A and 
    %   update QR decomposition (Q, R, p), AB, gamma, and omega.

    %%   First step : interchanging the k+1 and k+j th columns    
    if j > 1  
        AB(:, [1, j]) = AB(:, [j, 1]);
        gamma([1, j]) = gamma([j, 1]);
        R(:, [k+1, k+j]) =R(:, [k+j, k+1]);
        p([k+1, k+j]) = p([k+j, k+1]);
    end
    
    %%   Second step : interchanging the i and k th columns
    if i < k
        p(i:k)     =  p([(i+1):k, i]);
        R(:, i:k)  =  R(:, [(i+1):k, i]);
        omega(i:k) =  omega([(i+1):k, i]);
        AB(i:k, :) =  AB([(i+1):k, i], :);
        %   givens rotation for the triangulation of R(1:k, 1:k)
        for ii = i : (k-1)
            G = givens(R(ii, ii), R(ii+1, ii));

            if G(1, :) * [R(ii,ii); R(ii+1,ii)] < 0
                G = -G;  %  guarantee R(ii,ii) > 0
            end
            R(ii:ii+1, :) = G * R(ii:ii+1, :);
            Q(:, ii:ii+1) = Q(:, ii:ii+1) * G';
            %disp("ga22");
            %disp(R(k,k));
        end
        if R(k,k) < 0
            R(k, :) = - R(k, :);
            Q(:, k) = -Q(:, k);
        end
    end

    %%   Third step : zeroing out the below-diag of k+1 th columns
    if k < size(R,1)
        %disp("ga33");
        %disp(R(k,k));
        for ii = (k+2) : size(R,1)
            G = givens(R(k+1, k+1), R(ii, k+1));

            if G(1, :) * [R(k+1, k+1); R(ii, k+1)] < 0
                G = -G;     %  guarantee R(k+1,k+1) > 0
            end 
            R([k+1, ii], :) = G * R([k+1, ii], :);
            %if trace(G) < 2
            %     disp("ga77");
            %    disp(R(k,k));
            %    disp("givens");
            %    disp(G);
                %disp("counter");
                %disp(counter);
            %end
            Q(:,[k+1, ii]) = Q(:, [k+1, ii]) * G';
        end
    end

    %%   Fourth step : interchaing the k and k+1 th columns
    p([k,k+1]) = p([k+1,k]);
    ga = R(k, k);
    %disp("ga");
    %disp(ga);
    mu = R(k, k+1) / ga;         
    if k < size(R,1)
        nu = R(k+1, k+1) / ga;
    else
        nu = 0;
    end
    rho = sqrt(mu*mu + nu*nu);
    ga_bar = ga * rho;
    b1 = R(1:(k-1), k);
    b2 = R(1:(k-1), k+1);
    c1T = R(k, (k+2):end);
    c2T = R(k+1, (k+2):end);
    c1T_bar = (mu * c1T + nu * c2T)/rho;
    c2T_bar = (nu * c1T - mu * c2T)/rho;

    %   modify R
    R(1:(k-1), k) = b2;
    R(1:(k-1), k+1) = b1;
    R(k,k)     = ga_bar;
    R(k,k+1)   = ga * mu /rho;
    R(k+1,k+1) = ga * nu / rho;
    R(k, (k+2):end)   = c1T_bar;
    R(k+1, (k+2):end) = c2T_bar;

    %   update AB
    u = linsolve(R(1:k-1, 1:k-1), b1, struct('UT', true));
    u1 = AB(1:k-1, 1);
    AB(1:k-1, 1) = (nu*nu*u - mu*u1)/rho/rho;
    AB(k, 1) = mu / rho / rho;
    AB(k, 2:end) = c1T_bar / ga_bar;
    %disp(size(c1T_bar))
    %disp(size(u1))
    %disp(size(AB(1:k-1, 2:end)))
    AB(1:k-1, 2:end) = AB(1:k-1, 2:end) + (nu*u*c2T_bar - u1*c1T_bar)/ga_bar;

    %   update gamma
    gamma(1) = ga * nu / rho;
    gamma(2:end) = (gamma(2:end).^2 + (c2T_bar').^2 - (c2T').^2).^(1/2);

    %   update omega
    u_bar = u1 + mu * u;
    omega(k) = ga_bar;
    omega(1:k-1) = (omega(1:k-1).^(-2) + u_bar.^2/(ga_bar*ga_bar) - u.^2/(ga*ga)).^(-1/2);

    %%   Eliminate new R(k+1, k) by orthgonal transformation           
    Gk = [mu/rho, nu/rho; nu/rho, -mu/rho];
    if k < size(R, 1)
        %disp(k)
        %disp(size(R, 1))
        %disp(size(R, 2))
        Q(:, [k,k+1]) = Q(:, [k,k+1]) * Gk';
    end                         
end

%   Only return the truncated version of the strong RRQR decomposition
Q = Q(:, 1:k);
R = R(1:k, :);
end

```

---


We proved that Algorithm-3 and 4 compute a strong RRQR given k.

Now, we can't do anything with them because they require a $k$. So, let us, now, produce an algorithm that computes $k$ and a strong RRQR, as we go.


---
class: text-xs px-10 py-4
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
layout: center
---

## Thus Algorithm 5 can detect a sufficiently large gap in the singular values of M if we change the condition in the outer while-loop to 

$\max_{1 \leq j \leq n-k}\gamma_j(C^k) \geq \delta \lor \max_{1 \leq i \leq k, 1 \leq j \leq n-k} \frac{\gamma_j(C_k)}{\omega_i(A_k)} \geq \zeta$. 

## This is useful when solving RD-LSP using RRQR factorization. This is we've introduced the need for SRRQR, by the way. A full circle.

---

**Note**: 

The paper goes at length explaining how to update $A_k$, $B_k$, $C_k$, $\omega_{*}(A_k)$, $\gamma_{*}(C_k)$, $A_k^{-1}B_k$ after $k$ increases and to modify them after an interchange. Also, the bounds the total number of interchanges and the total number of operations.

# Operation Count: $O(mnk_f)$
## Where $k_f$ is the final value of $k$ when SRRQR-3 (Algorithm-5) halts.

---
layout: center
---
# **Golub is King, But Stewart follows**: 

Since, Algorithm-1 seems to work well in practice. Algorithm-5 tends to perform very few or no interchanges in its inner-while loop. This suggests using Algorithm-1 as an initial phase, and then using Algorithm-4 to remove any dependent columns from $A_k$, reducing $k$ as needed. In many respects, the resulting algorithm is equivalent to applying Algorithm 5 to $M^{-1}$

---
layout: center
---
## Some Big-Picture Questions: 

1. How can we measure the performance of the factorisation? By monitoring $\frac{\sigma_k(M)}{\sigma_{\min}(A_k)}$ and $\frac{\sigma_{\max}(C_k)}{\sigma_{k+1}(M)}$

2. We know that computing singular values is an expensive operation. Assuming you have access to black-box which produces singular values quickly, how would you change the Algorithm-1? Greedy I, as defined in RRQR Paper.

---
layout: image
image: public/Presentation-4.png
---

---
layout: image
image: public/ne_svd_vs_rrqr.png
backgroundSize: 80%
class: py-6
---

<span class="text-3xl font-bold" color="black"> SVD vs RRQR </span>
<br>
<span class="text-xl font-semibold" color="black"> Here, $A_k$ refers to $A_{SVD}$ and $B_k$ refers to $A_{RRQR}$ </span>


---
layout: image
image: public/ne_srrqr_1.png
backgroundSize: 50%
class: py-6
---


<span class="text-3xl font-bold" color="black"> SRRQR vs RRQR (1) </span>
<br>
<span class="text-xl font-semibold" color="black"> Here, $t_{k_f}$ refers to the number of interchanges of the columns. </span>



---
layout: image
image: public/ne_srrqr_2.png
backgroundSize: 70%
class: py-6
---

<span class="text-3xl font-bold" color="black"> SRRQR vs RRQR (2) </span>
<br>

---
layout: image
image: public/norm_of_residual.png
backgroundSize: 70%
class: py-6
---

<span class="text-3xl font-bold" color="black"> Least Squares </span>
<br>
<span class="text-xl font-semibold" color="black"> Norm of the Residual </span>
<br>
<span class="text-lg font-medium" color="black"> T: Truncated, F: Full </span>
<br>



---
layout: image
image: public/differences_bw_solns.png
backgroundSize: 70%
class: py-6
---

<span class="text-3xl font-bold" color="black"> Least Squares </span>
<br>
<span class="text-xl font-semibold" color="black"> Difference Between the Solutions. </span>
<br>
<span class="text-lg font-medium" color="black"> T: Truncated, B: Basic </span>
<br>
---
layout: image
image: public/Presentation-5.png
---

---
layout: center
---

## Model Preserving Compression in Neural Networks
### NeurIPS, 2022


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
layout: image
image: "public/vgg16_cifar_10.jpg"
backgroundSize: 75%
---

<span class="text-3xl font-bold" color="black"> VGG-16 for CIFAR-10 (No Finetuning) </span>



---
layout: statement
---

# Let's see it working!


---
layout: image
image: "public/clean_xor_dataset.png"
backgroundSize: 50%
---


<span class="text-3xl font-bold" color="black"> Constructing a Dataset. </span>



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


<span class="text-3xl font-bold" color="black"> 100% Accuracy </span>



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




