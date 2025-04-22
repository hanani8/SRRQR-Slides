import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BQuvDlXV.js";import{b as g,o as y,w as l,g as s,e as k,m as F,z as i,v as c,x as o,E as a}from"./modules/vue-D-V5T23k.js";import{I as A}from"./slidev/default-D7QdIGX7.js";import{u as r,f as E}from"./slidev/context-CiKXUAFA.js";import"./modules/unplugin-icons-BaH8mTk-.js";import"./index-BM2v8R4J.js";import"./modules/shiki-DlUChZ4r.js";const L={__name:"slides.md__slidev_39",setup(D){const{$clicksContext:t,$frontmatter:e}=r();return t.setup(),(N,n)=>{const h=p;return y(),g(A,c(o(a(E)(a(e),38))),{default:l(()=>[n[1]||(n[1]=s("h1",null,"Source Code for RRQR (Hybrid-III) - DGEQPX",-1)),k(h,F({lines:!0,maxHeight:"500px"},{ranges:["1-15","213-220","221-228"]}),{default:l(()=>n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes min-light slidev-code",style:{"--shiki-light":"#24292eff","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-fortran-free-form"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"SUBROUTINE"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DGEQPX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   ORCOND, RANK, SVLUES, WORK, LWORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     This code is part of a release of the package for computing")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     rank"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"revealing QR Factorizations written by:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"     ==================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Christian H. Bischof        and   Gregorio Quintana"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Orti")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Math. and Comp. Sci. Div.         Departamento de Informatica")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Argonne National Lab.             Universidad Jaime I")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Argonne, IL "),s("span",{style:{"--shiki-light":"#1976D2"}},"60439"),s("span",{style:{"--shiki-light":"#24292EFF"}},"                 Campus P. Roja, "),s("span",{style:{"--shiki-light":"#1976D2"}},"12071"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Castellon")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     USA                               Spain")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     bischof@mcs"),s("span",{style:{"--shiki-light":"#D32F2F"}},".anl."),s("span",{style:{"--shiki-light":"#24292EFF"}},"gov               gquintan@inf"),s("span",{style:{"--shiki-light":"#D32F2F"}},".uji."),s("span",{style:{"--shiki-light":"#24292EFF"}},"es")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"     ==================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     $Revision: "),s("span",{style:{"--shiki-light":"#1976D2"}},"1.84"),s("span",{style:{"--shiki-light":"#24292EFF"}}," $")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     $Date: "),s("span",{style:{"--shiki-light":"#1976D2"}},"96"),s("span",{style:{"--shiki-light":"#24292EFF"}},"/"),s("span",{style:{"--shiki-light":"#1976D2"}},"12"),s("span",{style:{"--shiki-light":"#24292EFF"}},"/"),s("span",{style:{"--shiki-light":"#1976D2"}},"30"),s("span",{style:{"--shiki-light":"#1976D2"}}," 16"),s("span",{style:{"--shiki-light":"#24292EFF"}},":"),s("span",{style:{"--shiki-light":"#1976D2"}},"59"),s("span",{style:{"--shiki-light":"#24292EFF"}},":"),s("span",{style:{"--shiki-light":"#1976D2"}},"13"),s("span",{style:{"--shiki-light":"#24292EFF"}}," $")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JOB, M, N, K, LDA, LDC, RANK, LWORK, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   IRCOND, ORCOND")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JPVT( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   A( LDA, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), C( LDC, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   WORK( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), SVLUES( "),s("span",{style:{"--shiki-light":"#1976D2"}},"4"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ======"),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  DGEQPX computes a QR factorization")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"       A"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"P "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," Q"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"[ R11 R12 ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               [  "),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  R22 ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  of a "),s("span",{style:{"--shiki-light":"#D32F2F"}},"real"),s("span",{style:{"--shiki-light":"#24292EFF"}}," m by n matrix A. The permutation P is")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  chosen with the goal to reveal the rank of A by a")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  suitably dimensioned trailing submatrix R22 with norm(R22)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  being small.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Based on methods related to Chandrasekaran"),s("span",{style:{"--shiki-light":"#D32F2F"}},"&"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Ipsen's algorithms.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Arguments")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ========"),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  JOB     (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The job to "),s("span",{style:{"--shiki-light":"#D32F2F"}},"do"),s("span",{style:{"--shiki-light":"#24292EFF"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          ="),s("span",{style:{"--shiki-light":"#1976D2"}}," 1"),s("span",{style:{"--shiki-light":"#24292EFF"}},": The orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               triangularization are only applied to matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               Thus, matrix C is not updated.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          ="),s("span",{style:{"--shiki-light":"#1976D2"}}," 2"),s("span",{style:{"--shiki-light":"#24292EFF"}},": The same orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               triangularization of matrix A are applied to")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               matrix C from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               That is, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Q"),s("span",{style:{"--shiki-light":"#22863A"}},"'*A*P=R, then C := Q'"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               In this case, matrix C is m"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"by"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"k.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          ="),s("span",{style:{"--shiki-light":"#1976D2"}}," 3"),s("span",{style:{"--shiki-light":"#24292EFF"}},": The transpose of the orthogonal transformations needed")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               in the triangularization of matrix A are applied")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               to matrix C from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               That is, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Q"),s("span",{style:{"--shiki-light":"#22863A"}},"'*A*P=R, then C := C*Q.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               In this case, matrix C is k-by-m.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          In these three cases, the permutations are always stored")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          in vector JPVT.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  M       (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The number of rows of matrices A. M >= 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=2, M is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=3, M is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  N       (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The number of columns of matrix A.  N >= 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  K       (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          It defines the dimension of matrix C. K >= 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=2, K is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=3, K is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  A       (input/output) DOUBLE PRECISION array, dimension (LDA,N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          On entry, the m by n matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          On exit, the upper triangle of the array contains the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          min(m,n) by n upper trapezoidal matrix R; the lower triangle")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          array is filled with zeros.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  LDA     (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The leading dimension of array A. LDA >= max(1,M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  C       (input/output) DOUBLE PRECISION array, dimension")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                ( LDC, K ) if JOB=2.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                ( LDC, M ) if JOB=3.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If argument JOB asks, all the orthogonal transformations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          applied to matrix A are also applied to matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  LDC     (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The leading dimension of array C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=2, then LDC >= MAX(1,M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=3, then LDC >= MAX(1,K).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  JPVT    (output) INTEGER array, dimension (N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          JPVT(I) = J <==> Column J of A has been permuted into")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                           position I in AP.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          JPVT(1:RANK) contains the indices of the columns considered")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          linearly independent.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          JPVT(RANK+1:N) contains the indices of the columns considered")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          linearly dependent from the previous ones.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  IRCOND  (input) DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          1/IRCOND specifies an upper bound on the condition number")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          of R11. If IRCOND == 0, IRCOND = machine precision is chosen")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          as default. IRCOND must be >= 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  ORCOND  (output) DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          1/ORCOND is an estimate for the condition number of R11.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RANK    (output) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          RANK is an estimate for the numerical rank of A with respect")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          to the threshold 1/IRCOND in the sense that")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               RANK = arg_max(cond_no(R(1:r,1:r))<1/IRCOND)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  SVLUES  (output) DOUBLE PRECISION array, dimension (4)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          On exit, SVLUES contains estimates of some of the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          singular values of the triangular factor R.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          SVLUES(1): largest singular value of R(1:RANK,1:RANK)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          SVLUES(2): smallest singular value of R(1:RANK,1:RANK)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          SVLUES(3): smallest singular value of R(1:RANK+1,1:RANK+1)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          SVLUES(4): smallest singular value of R")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If the triangular factorization is a rank-revealing one")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          (which will be the case if the leading columns were well-")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          conditioned), then SVLUES(1) will also be an estimate")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          for the largest singular value of A, SVLUES(2) and SVLUES(3)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          will be estimates for the RANK-th and (RANK+1)-st singular")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          value of A, and SVLUES(4) will be an estimate for the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          smallest singular value of A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          By examining these values, one can confirm that the rank is")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          well defined with respect to the threshold chosen.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  WORK    (workspace) DOUBLE PRECISION array, dimension (LWORK)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          On exit: work(1) is the size of the storage array needed")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                   for optimal performance")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  LWORK   (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The dimension of array WORK.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB=1:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*             The unblocked strategy requires that:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                 LWORK >= 2*MN+3*N.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*             The block algorithm requires that:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                 LWORK >= 2*MN+N*NB.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JOB<>1:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*             The unblocked strategy requires that:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                 LWORK >= 2*MN+2*N+MAX(K,N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*             The block algorithm requires that:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                 LWORK >= 2*MN+NB*NB+NB*MAX(K,N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Where MN = min(M,N) and NB is the block size for this")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          environment.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          In both cases, the minimum required workspace is the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          one for the unblocked strategy.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  INFO    (output) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 0: Successful exit.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          < 0: If INFO = -i, the i-th argument had an illegal value")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          > 0: Problems in the computation of the rank.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                   1: Exceeded the allowed maximum number of steps.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                   2: Rank not well defined.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          In adition, vector SVLUES tell if rank is not well defined.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =====================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Parameters ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      PARAMETER          ( ZERO = 0.0D+0 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           XERBLA, DGEQPB, DTRQPX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Intrinsic Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTRINSIC          MIN, MAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   WSIZE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            MN, WKMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      MN = MIN( M, N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( JOB.EQ.1 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WKMIN = 2*MN+3*N")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WKMIN = 2*MN+2*N+MAX(K,N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Test input arguments")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ====================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INFO = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( ( JOB.LT.1 ).OR.( JOB.GT.3 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( M.LT.0 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( N.LT.0 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( K.LT.0 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -4")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( LDA.LT.MAX(1,M) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -6")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( ( ( JOB.EQ.1 ).AND.( LDC.LT.1 ) ).OR.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $         ( ( JOB.EQ.2 ).AND.( LDC.LT.MAX( 1, M ) ) ).OR.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $         ( ( JOB.EQ.3 ).AND.( LDC.LT.MAX( 1, K ) ) ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -8")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( IRCOND.LT.ZERO ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -10")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( LWORK.LT.MAX( 1, WKMIN ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = -15")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( INFO.NE.0 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL XERBLA( '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"DGEQPX"),s("span",{style:{"--shiki-light":"#22863A"}},"',-INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Preprocessing")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     =============")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      CALL DGEQPB( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $             ORCOND, RANK, SVLUES, WORK, LWORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      WSIZE = WORK( 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Postprocessing")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ==============")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( RANK.GT.0 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DTRQPX( JOB, M, N, K, A, LDA, C, LDC, JPVT, IRCOND,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                ORCOND, RANK, SVLUES, WORK, LWORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      WORK( 1 ) = WSIZE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     End of DGEQPX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END")])])],-1)])),_:1},16)]),_:1},16)}}};export{L as default};
