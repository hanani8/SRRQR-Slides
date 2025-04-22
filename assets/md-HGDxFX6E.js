import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BQuvDlXV.js";import{b as F,o as g,w as n,g as s,e as y,m as k,z as i,v as c,x as A,E as t}from"./modules/vue-D-V5T23k.js";import{I as D}from"./slidev/default-D7QdIGX7.js";import{u as E,f as o}from"./slidev/context-CiKXUAFA.js";import"./modules/unplugin-icons-BaH8mTk-.js";import"./index-BM2v8R4J.js";import"./modules/shiki-DlUChZ4r.js";const T={__name:"slides.md__slidev_40",setup(r){const{$clicksContext:a,$frontmatter:h}=E();return a.setup(),(N,l)=>{const e=p;return g(),F(D,c(A(t(o)(t(h),39))),{default:n(()=>[l[1]||(l[1]=s("h1",null,"Source Code for RRQR (Hybrid-III) - DTRQXC",-1)),y(e,k({lines:!0,maxHeight:"400px"},{ranges:["27-37","189-192","196-208","222-255","256-296","297-329"]}),{default:n(()=>l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes min-light slidev-code",style:{"--shiki-light":"#24292eff","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-fortran-free-form"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"SUBROUTINE"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DTRQXC"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  RANK, SVLUES, RCNR, RCNRP1, WORK, INFO )")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     $Date: "),s("span",{style:{"--shiki-light":"#1976D2"}},"96"),s("span",{style:{"--shiki-light":"#24292EFF"}},"/"),s("span",{style:{"--shiki-light":"#1976D2"}},"12"),s("span",{style:{"--shiki-light":"#24292EFF"}},"/"),s("span",{style:{"--shiki-light":"#1976D2"}},"30"),s("span",{style:{"--shiki-light":"#1976D2"}}," 16"),s("span",{style:{"--shiki-light":"#24292EFF"}},":"),s("span",{style:{"--shiki-light":"#1976D2"}},"59"),s("span",{style:{"--shiki-light":"#24292EFF"}},":"),s("span",{style:{"--shiki-light":"#1976D2"}},"20"),s("span",{style:{"--shiki-light":"#24292EFF"}}," $")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JOB, M, N, K, LDA, LDC, RANK, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   RCNR, RCNRP1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   A( LDA, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), C( LDC, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), WORK( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   SVLUES( "),s("span",{style:{"--shiki-light":"#1976D2"}},"4"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JPVT( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ======"),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  DTRQXC carries out an algorithm related to algorithm Hybrid"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"III")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  by Chandrasekaran and Ipsen for the stage RANK. The algorithm used")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  here offers the following advantages:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  o It is faster since it is based on Chan"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"II instead of Stewart"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"II.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  o This algorithm uses the F factor technique to reduce the number of")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"    cycling problems due to roundoff errors.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  o The final steps that "),s("span",{style:{"--shiki-light":"#D32F2F"}},"do"),s("span",{style:{"--shiki-light":"#24292EFF"}}," not improve the ordering are saved.")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  JPVT    (input/output) INTEGER array, dimension ( N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JPVT(I) = K, then the Ith column of the permuted")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          A was the Kth column of the original A (just before")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          the preprocessing). If a permutation occurs, JPVT will")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          be updated correctly.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RANK    (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Th estimate of the rank. 1 <= RANK <= MIN(M,N).")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RCNR    (output) DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Th estimate for the inverse of the condition number of block")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          R(1:RANK,1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RCNRP1  (output) DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Th estimate for the inverse of the condition number of block")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          R(1:RANK+1,1:RANK+1).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  WORK    (workspace) DOUBLE PRECISION array,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*             dimension ( MN+MAX(N,2*MN) ), where MN=MIN(M,N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  INFO    (output) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 0: Successful exit.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          < 0: If info = -i, the i-th argument had an illegal value.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 1: Exceeded the allowed maximum number of steps. That is,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               the matrix presents a slow convergence.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  ===================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Parameters ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   ONE, F")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      PARAMETER          ( F = 0.5D+0, ONE = 1.0D+0 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Indices into the '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"svlues"),s("span",{style:{"--shiki-light":"#22863A"}},"' array.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            IMAX, IBEFOR, IAFTER, IMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      PARAMETER          ( IMAX = 1, IBEFOR = 2, IAFTER = 3, IMIN = 4 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   COSINE, SINE, SMAX, SMAXPR, SMIN, SMINPR,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                   SMXRP1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      LOGICAL            PERMUT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            J, MN, MXSTPS, NACPTD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            NS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           DSCAL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            IDAMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   DLASMX, DNRM2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           IDAMAX, DLASMX, DNRM2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Intrinsic Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTRINSIC          MAX, MIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      MN = MIN( M, N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      NS = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      MXSTPS = N + 25")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INFO = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Quick return if possible.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( MN.EQ.0 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $   RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Inicialization of variable NACPTD, which controls main loop.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      NACPTD = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Compute the norms of block A(1:RANK,1:RANK) and store them")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     in vector WORK(1:RANK). It is computed only once at the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     beginning and updated every iteration. It is used to estimate")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     the largest singular value in order to pass it to Chan-II.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DO 10 J = 1, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( J ) = DNRM2( J, A( 1, J ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 10   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *****************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * start of loop *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *****************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 20   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * call to Golub-I(rank) *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NACPTD.LT.4 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Apply Golub-I for the stage RANK.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                F, RANK, PERMUT, WORK( MN+1 ), INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        If necessary, update the contents of WORK(RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $      WORK( RANK ) = DNRM2( RANK, A( 1, RANK ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Update variables NACPTD and NS.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = NACPTD+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         NS = NS + 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * call to Golub-I(rank+1) *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NACPTD.LT.4 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Determine if the application of Golub-I(rank+1) is necessary.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( RANK.EQ.MN ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Not necessary. Therefore, no permutation occurs.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            PERMUT = .FALSE.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Apply Golub-I for the stage RANK+1.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                   F, RANK+1, PERMUT, WORK( MN+1 ), INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Update variable NS.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NS = NS+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Update variable NACPTD.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = NACPTD+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * call to Chan-II (rank+1)*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NACPTD.LT.4 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Determine if the application of Chan-II(rank+1) is necessary.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( RANK.EQ.MN ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Not necessary. Therefore, no permutation occurs.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            PERMUT = .FALSE.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Extend vector WORK(1:RANK) to vector WORK(1:RANK+1).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           So, pivoting vector WORK(1:N) inside Chan-II will be")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           easier.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            WORK( RANK+1 ) = DNRM2( RANK+1, A( 1, RANK+1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Apply Chan-II for the stage RANK+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           on block A(1:RANK+1,1:RANK+1).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DCNIIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                   WORK, F, RANK+1, PERMUT, WORK( MN+1 ), INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Update variable NS.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NS = NS+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Update variable NACPTD.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = NACPTD+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * call to Chan-II(rank) *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     *-*-*-*-*-*-*-*-*-*-*-*-*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NACPTD.LT.4 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Apply Chan-II for the stage RANK on block A(1:RANK,1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DCNIIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                WORK, F, RANK, PERMUT, WORK( MN+1 ), INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Update variables NACPTD and NS.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            NACPTD = NACPTD+1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         NS = NS + 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Check if loop must finish.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NS.GE.MXSTPS ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         INFO = 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE IF( NACPTD.LT.4 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         GOTO 20")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ***************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * end of loop *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ***************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     **************************************************************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     * Computation of vector SVLUES and variables RCNR and RCNRP1 *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     **************************************************************")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Computation of the largest singular value and the smallest")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     singular value of A(1:RANK,1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SMAX = ABS( A( 1, 1 ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      WORK( 1 ) = ONE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SMIN = SMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      WORK( MN+1 ) = ONE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DO 30 J = 2, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 1, J-1, WORK( 1 ), SMAX,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( 1, J ), A( J, J ), SMAXPR, SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DSCAL( J-1, SINE, WORK( 1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( J ) = COSINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMAX = SMAXPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 2, J-1, WORK( MN+1 ), SMIN,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( 1, J ), A( J, J ), SMINPR, SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DSCAL( J-1, SINE, WORK( MN+1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( MN+J ) = COSINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMIN = SMINPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 30   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SVLUES( IMAX ) = SMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SVLUES( IBEFOR ) = SMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Computation of the largest singular value and the smallest")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     singular value of A(1:RANK+1,1:RANK+1).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( RANK.LT.MN ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 1, RANK, WORK( 1 ), SMAX,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( 1, RANK+1 ), A( RANK+1, RANK+1 ), SMAXPR,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMAX = SMAXPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 2, RANK, WORK( MN+1 ), SMIN,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( 1, RANK+1 ), A( RANK+1, RANK+1 ), SMINPR,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DSCAL( RANK, SINE, WORK( MN+1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( MN+RANK+1 ) = COSINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMIN = SMINPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SMXRP1 = SMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SVLUES( IAFTER ) = SMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Computation of the smallest singular value of A(1:MN,1:MN).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DO 40 J = RANK+2, MN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 2, J-1, WORK( MN+1 ), SMIN,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( 1, J ), A( J, J ), SMINPR, SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DSCAL( J-1, SINE, WORK( MN+1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( MN+J ) = COSINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMIN = SMINPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 40   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SVLUES( IMIN ) = SMIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Computation of RCNR and RCNRP1.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RCNR = SVLUES( IBEFOR ) / SVLUES( IMAX )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RCNRP1 = SVLUES( IAFTER ) / SMXRP1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     End of DTRQXC")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SUBROUTINE DGLBIF( JOB, M, N, K, A, LDA, C, LDC, JPVT,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    F, RANK, PERMUT, WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            JOB, M, N, K, LDA, LDC, RANK, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   F")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      LOGICAL            PERMUT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            JPVT( * )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =======")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  DGLBIF computes the column index of A(RANK:M,RANK:N) with largest")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  norm and determines if pivoting is necessary. If so, it pivots it into")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  column RANK, permuts vector JPVT and permuts and retriangularizes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  matrix A. It does only one permutation.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  Arguments")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =========")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  JOB     (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The job to do:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 1: The orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               triangularization are only applied to matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               Thus, matrix C is not updated.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 2: The same orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               triangularization of matrix A are applied to")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               matrix C from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               That is, if Q'"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"A"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"P"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}},"R, then C :"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," Q"),s("span",{style:{"--shiki-light":"#22863A"}},"'*C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               In this case, matrix C is m-by-k.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 3: The transpose of the orthogonal transformations needed")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               in the triangularization of matrix A are applied")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               to matrix C from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               That is, if Q'"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"A"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"P"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}},"R, then C :"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," C"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Q.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               In this case, matrix C is k"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"by"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"m.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          In these three cases, the permutations are always stored")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          in vector JPVT.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  M       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The number of rows of matrices A. M "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", M is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", M is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  N       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The number of columns of matrix A.  N "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  K       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          It defines the "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of matrix C. K "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  A       (input/output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension (LDA,N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          On "),s("span",{style:{"--shiki-light":"#D32F2F"}},"entry"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#6F42C1"}},"the"),s("span",{style:{"--shiki-light":"#24292EFF"}}," m by n matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          On "),s("span",{style:{"--shiki-light":"#D32F2F"}},"exit"),s("span",{style:{"--shiki-light":"#24292EFF"}},", the upper triangle of the array contains the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#6F42C1"}},"          min"),s("span",{style:{"--shiki-light":"#24292EFF"}},"(m,n) by n upper trapezoidal matrix R; the lower triangle")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          array is filled with zeros.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  LDA     (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The leading "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of array A. LDA "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," max"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  C       (input/output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"                ( LDC, K ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"                ( LDC, M ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," argument JOB asks, all the orthogonal transformations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          applied to matrix A are also applied to matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  LDC     (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The leading "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of array C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", then LDC "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MAX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", then LDC "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MAX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",K).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  JPVT    (input/output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension ( N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JPVT(I) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," K, then the Ith column of the permuted")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          A was the Kth column of the original A (just before the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          preprocessing). "),s("span",{style:{"--shiki-light":"#D32F2F"}},"If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," a permutation occurs, it will be")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          updated correctly.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  F       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          F factor for the pivoting. It must be always "),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#D32F2F"}}," <"),s("span",{style:{"--shiki-light":"#24292EFF"}}," f "),s("span",{style:{"--shiki-light":"#D32F2F"}},"<="),s("span",{style:{"--shiki-light":"#1976D2"}}," 1.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  RANK    (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          Th estimate for the rank. "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#D32F2F"}}," <="),s("span",{style:{"--shiki-light":"#24292EFF"}}," RANK "),s("span",{style:{"--shiki-light":"#D32F2F"}},"<="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"(M,N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  PERMUT  (output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"LOGICAL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          Tells "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," a permutation occurred.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  WORK    (workspace) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"             dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MAX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( N, "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"(M,N) ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  INFO    (output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          ="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0"),s("span",{style:{"--shiki-light":"#24292EFF"}},": Successful "),s("span",{style:{"--shiki-light":"#D32F2F"}},"exit"),s("span",{style:{"--shiki-light":"#24292EFF"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          <"),s("span",{style:{"--shiki-light":"#1976D2"}}," 0"),s("span",{style:{"--shiki-light":"#24292EFF"}},": "),s("span",{style:{"--shiki-light":"#D32F2F"}},"If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," info "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#D32F2F"}}," -"),s("span",{style:{"--shiki-light":"#24292EFF"}},"i, the i"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"th argument had an illegal "),s("span",{style:{"--shiki-light":"#D32F2F"}},"value"),s("span",{style:{"--shiki-light":"#24292EFF"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ===================================================================="),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            MN, JJ, J, ITEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Local Arrays ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   RDUMMY( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"External"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      EXTERNAL"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           DCOPY, DGRET")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"External"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            IDAMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   DNRM2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      EXTERNAL"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           IDAMAX, DNRM2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      MN "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      INFO "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Quick "),s("span",{style:{"--shiki-light":"#D32F2F"}},"return"),s("span",{style:{"--shiki-light":"#24292EFF"}}," if possible.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( MN"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".OR."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( RANK"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#24292EFF"}},"N )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".OR."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( RANK"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"         PERMUT "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," .FALSE.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Compute the norms of the columns of "),s("span",{style:{"--shiki-light":"#D32F2F"}},"block"),s("span",{style:{"--shiki-light":"#24292EFF"}}," A(RANK:M,RANK:N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     and store them in vector WORK(RANK:N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 10"),s("span",{style:{"--shiki-light":"#24292EFF"}}," J "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," RANK, N")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"         WORK( J ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $       DNRM2( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, J )"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", A( RANK, J ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 10"),s("span",{style:{"--shiki-light":"#D32F2F"}},"   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Find column with largest two"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"norm of upper triangular "),s("span",{style:{"--shiki-light":"#D32F2F"}},"block")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     A(RANK:M,RANK:N). "),s("span",{style:{"--shiki-light":"#D32F2F"}},"Use"),s("span",{style:{"--shiki-light":"#24292EFF"}}," the data stored in vector WORK(RANK:N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      JJ "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," RANK "),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#1976D2"}}," 1"),s("span",{style:{"--shiki-light":"#D32F2F"}}," +"),s("span",{style:{"--shiki-light":"#24292EFF"}}," IDAMAX( N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", WORK( RANK ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Determine "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," a permutation must occur.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      PERMUT "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," ( ( JJ"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".AND.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $         ( ( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"ABS"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( WORK( JJ ) )"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"F )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#6F42C1"}},"ABS"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( WORK( RANK ) ) ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( PERMUT ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Exchage cyclically to the right the columns of matrix A")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        between RANK and JJ. That is, RANK"),s("span",{style:{"--shiki-light":"#D32F2F"}},"->"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#D32F2F"}},"->"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+2"),s("span",{style:{"--shiki-light":"#24292EFF"}},",...,JJ"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#D32F2F"}},"->"),s("span",{style:{"--shiki-light":"#24292EFF"}},"JJ,JJ"),s("span",{style:{"--shiki-light":"#D32F2F"}},"->"),s("span",{style:{"--shiki-light":"#24292EFF"}},"K. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"Use"),s("span",{style:{"--shiki-light":"#24292EFF"}}," vector WORK(1:MN)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        to store temporal "),s("span",{style:{"--shiki-light":"#D32F2F"}},"data"),s("span",{style:{"--shiki-light":"#24292EFF"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DCOPY"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( MN, JJ ), A( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", JJ ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", WORK, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 20"),s("span",{style:{"--shiki-light":"#24292EFF"}}," J "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," JJ"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", RANK, "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DCOPY"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( MN, J"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), A( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", J ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  A( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", J"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 20"),s("span",{style:{"--shiki-light":"#D32F2F"}},"      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DCOPY"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( MN, JJ ), WORK, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", A( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", RANK ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Exchange in the same way vector JPVT.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"         ITEMP "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," JPVT( JJ )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 30"),s("span",{style:{"--shiki-light":"#24292EFF"}}," J "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," JJ"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", RANK, "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            JPVT( J"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," JPVT( J )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 30"),s("span",{style:{"--shiki-light":"#D32F2F"}},"      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"         JPVT( RANK ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," ITEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Retriangularize matrix A after the permutation.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DGRET"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, JJ )"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  A( RANK, RANK ), LDA, RDUMMY, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         ELSE IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DGRET"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, JJ )"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  A( RANK, RANK ), LDA, C( RANK, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         ELSE IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DGRET"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, "),s("span",{style:{"--shiki-light":"#6F42C1"}},"MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, JJ )"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"RANK"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  A( RANK, RANK ), LDA, C( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", RANK ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                  WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     End of DGLBIF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      END")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      SUBROUTINE"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DCNIIF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, M, N, K, A, LDA, C, LDC, JPVT, VNORM,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   F, RANK, PERMUT, WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JOB, M, N, K, LDA, LDC, RANK, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   F")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      LOGICAL"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            PERMUT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   A( LDA, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), C( LDC, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), VNORM( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), WORK( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JPVT( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ======"),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  DCNIIF computes the "),s("span",{style:{"--shiki-light":"#22863A"}},'"worst"'),s("span",{style:{"--shiki-light":"#24292EFF"}}," column in A("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},":RANK,"),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},":RANK) and")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  determines "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," pivoting is necessary. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," so, it pivots it into column")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  RANK, permuts vector JPVT, adjusts vector VNORM and permuts and")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  retriangularizes matrix A. It does only one permutation.")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  JPVT    (input/output) INTEGER array, dimension (N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If JPVT(I) = K, then the Ith column of the permuted")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          A was the Kth column of the original A (just before the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          preprocessing). If a permutation occurs, this vector will")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          be updated correctly.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  VNORM   (input/output) DOUBLE PRECISION array, dimension ( N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          VNORM(1:RANK) contains the norms of the columns of upper")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          triangular block A(1:RANK,1:RANK). If a permutation occurs,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          this vector will be updated correctly.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  F       (input) DOUBLE PRECISION")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          F factor for the pivoting. It must be always 0 < f <= 1.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RANK    (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Th estimate for the rank. 1 <= RANK <= MIN(M,N).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  PERMUT  (output) LOGICAL")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          Tells if a permutation occurred.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  WORK    (workspace) DOUBLE PRECISION array, dimension ( 2*MIN(M,N) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  INFO    (output) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 0: Successful exit.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          < 0: If info = -i, the i-th argument had an illegal value.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  Further Details")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  ===============")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*    If block R(1:RANK,1:RANK) is singular or near singular, there will")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  be no permutation because in that case the right (and left) singular")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  vectors are the canonical ones ((0,0,...0,1)^T).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*    That is, there will not be permutation if")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  RCOND <= SF * DLAMCH('"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Safe Minimum"),s("span",{style:{"--shiki-light":"#22863A"}},"'), where SF (Safe Factor) is")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  a security factor to avoid arithmetic exceptions.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =====================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Parameters ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   SF, ONE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      PARAMETER          ( SF = 1.0D+2, ONE = 1.0D+0 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            MN, JJ, J, ITEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   SMAX, SMIN, SMINPR, SINE, COSINE, TEMP ,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                   RDUMMY( 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           DCOPY, DTRSV, DHESS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            IDAMAX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   DNRM2, DLAMCH, DLASMX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           IDAMAX, DNRM2, DLAMCH, DLASMX")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      MN = MIN( M, N )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INFO = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Quick return if possible.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( ( MN.EQ.0 ).OR.( RANK.EQ.1 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         PERMUT = .FALSE.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Estimation of the largest singular value of block")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     A(1:RANK,1:RANK) by using the contents of vector")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     VNORM.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ITEMP = IDAMAX( RANK, VNORM, 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SMAX = DLASMX( RANK ) * VNORM( ITEMP )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Estimation of the smallest singular value of block")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     A(1:RANK,1:RANK) and its corresponding left singular vector.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Save left singular vector in vector WORK(1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SMIN = ABS( A( 1, 1 ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      WORK( 1 ) = ONE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DO 10 J = 2, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DLAIC1( 2, J-1, WORK( 1 ), SMIN, A( 1, J ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                A( J , J ), SMINPR, SINE, COSINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DSCAL( J-1, SINE, WORK( 1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         WORK( J ) = COSINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         SMIN = SMINPR")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 10   CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Determine if matrix A(1:RANK,1:RANK) is singular or nearly")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     singular. SF (Safe Factor) is used to say if it is singular or not.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( SMIN.LE.( SMAX*SF*DLAMCH( '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Safe minimum"),s("span",{style:{"--shiki-light":"#22863A"}},"' ) ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Singular or nearly singular matrix. Its right singular")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        vector is (0,0,...,0,1)^T. So, no pivoting is needed.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         PERMUT = .FALSE.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Follow usual method: Estimate the right singular vector")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        corresponding to the smallest singular value of upper")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        triangular block A(1:RANK,1:RANK) and put into vector")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        WORK(1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         CALL DTRSV( '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Upper"),s("span",{style:{"--shiki-light":"#22863A"}},"', '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"No transpose"),s("span",{style:{"--shiki-light":"#22863A"}},"', '"),s("span",{style:{"--shiki-light":"#24292EFF"}},"No unit"),s("span",{style:{"--shiki-light":"#22863A"}},"',")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                RANK, A, LDA, WORK, 1)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Find the index with largest absolute value in vector")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        WORK(1:RANK).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         JJ = IDAMAX( RANK, WORK, 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Determine if a permutation must occur.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         PERMUT = ( ( JJ.LT.RANK ).AND.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $          ( ( ABS( WORK( JJ ) )*F ).GT.ABS( WORK( RANK ) ) ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( PERMUT ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Exchange cyclically to the left the colums of matrix A")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           between JJ and RANK. That is, JJ->RANK,JJ+1->JJ,...,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           RANK->RANK-1. Use vector WORK to store temporal data.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DCOPY( RANK, A( 1, JJ ), 1, WORK, 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 20 J = JJ+1, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DCOPY( J, A( 1, J ), 1, A( 1, J-1 ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 20         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DCOPY( RANK, WORK, 1, A( 1, RANK ), 1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Exchange in the same way vector JPVT.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            ITEMP = JPVT( JJ )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 30 J = JJ+1, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"                JPVT( J-1 ) = JPVT( J )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 30         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            JPVT( RANK ) = ITEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Adjust the contents of VNORM.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            TEMP = VNORM( JJ )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 40 J = JJ+1, RANK")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               VNORM( J-1 ) = VNORM( J )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 40         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            VNORM( RANK ) = TEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Retriangularize matrix A after the permutation.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            IF( JOB.EQ.1 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     A( JJ, JJ ), LDA, RDUMMY, 1,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            ELSE IF( JOB.EQ.2 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     A( JJ, JJ ), LDA, C( JJ, 1 ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            ELSE IF( JOB.EQ.3 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DHESS( JOB, RANK-JJ+1, N-JJ+1, K,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     A( JJ, JJ ), LDA, C( 1, JJ ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                     WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     End of DCNIIF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      SUBROUTINE DGRET( JOB, M, N, K, A, LDA, C, LDC, WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            JOB, M, N, K, LDA, LDC, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   A( LDA, * ), C( LDC, * ), WORK( * )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =======")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  DGRET retriangularizes a special matrix. This has the following")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  features: its first column is non-zero and its main diagonal is zero")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  except the first element. Now it is showed a 4 by 8 small example:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                           x x x x x x x x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                           x 0 x x x x x x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                           x 0 0 x x x x x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*                           x 0 0 0 x x x x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  This subroutine assumes that in all cases N>=M.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  The orthogonal transformations applied to matrix A can be also")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  applied to matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  Parameters")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  ==========")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  JOB     (input) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          The job to do:")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 1: The orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               triangularization are only applied to matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               Thus, matrix C is not updated.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 2: The same orthogonal transformations needed in the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               triangularization of matrix A are applied to")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               matrix C from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               That is, if Q'"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"A"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"P"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}},"R, then C :"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," Q"),s("span",{style:{"--shiki-light":"#22863A"}},"'*C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               In this case, matrix C is m-by-k.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 3: The transpose of the orthogonal transformations needed")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               in the triangularization of matrix A are applied")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               to matrix C from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*               That is, if Q'"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"A"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"P"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}},"R, then C :"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," C"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"Q.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"               In this case, matrix C is k"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"by"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"m.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          In these three cases, the permutations are always stored")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          in vector JPVT.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  M       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The number of rows of matrices A. M "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", M is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", M is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  N       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The number of columns of matrix A.  N "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  K       (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          It defines the "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of matrix C. K "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K is the number of columns of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K is the number of rows of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  A       (input/output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension (LDA,N)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          On "),s("span",{style:{"--shiki-light":"#D32F2F"}},"entry"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#6F42C1"}},"the"),s("span",{style:{"--shiki-light":"#24292EFF"}}," m by n matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          On "),s("span",{style:{"--shiki-light":"#D32F2F"}},"exit"),s("span",{style:{"--shiki-light":"#24292EFF"}},", the upper triangle of the array contains the")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#6F42C1"}},"          min"),s("span",{style:{"--shiki-light":"#24292EFF"}},"(m,n) by n upper trapezoidal matrix R; the lower triangle")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          array is filled with zeros.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  LDA     (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The leading "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of array A. LDA "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," max"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  C       (input/output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"                ( LDC, K ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"                ( LDC, M ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," argument JOB asks, all the orthogonal transformations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          applied to matrix A are also applied to matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  LDC     (input) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          The leading "),s("span",{style:{"--shiki-light":"#D32F2F"}},"dimension"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of array C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", then LDC "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MAX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",M).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}},", then LDC "),s("span",{style:{"--shiki-light":"#D32F2F"}},">="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MAX"),s("span",{style:{"--shiki-light":"#24292EFF"}},"("),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",K).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  WORK    (workspace) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}}," array, dimension ( "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"M )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," the "),s("span",{style:{"--shiki-light":"#D32F2F"}},"block"),s("span",{style:{"--shiki-light":"#24292EFF"}}," algorithm is used, the size of this workspace")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          must be ( "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"M ).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          In this case this vector will contain the sines and cosines")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          of the angles of the Givens Rotations to be applied.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  INFO    (output) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          ="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0"),s("span",{style:{"--shiki-light":"#24292EFF"}},": Successful "),s("span",{style:{"--shiki-light":"#D32F2F"}},"exit"),s("span",{style:{"--shiki-light":"#24292EFF"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"          <"),s("span",{style:{"--shiki-light":"#1976D2"}}," 0"),s("span",{style:{"--shiki-light":"#24292EFF"}},": "),s("span",{style:{"--shiki-light":"#D32F2F"}},"If"),s("span",{style:{"--shiki-light":"#24292EFF"}}," info "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#D32F2F"}}," -"),s("span",{style:{"--shiki-light":"#24292EFF"}},"i, the i"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"th argument had an illegal "),s("span",{style:{"--shiki-light":"#D32F2F"}},"value"),s("span",{style:{"--shiki-light":"#24292EFF"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ===================================================================="),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Parameters ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      PARAMETER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          ( ZERO "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0.0D+0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"Common"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Blocks ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      COMMON"),s("span",{style:{"--shiki-light":"#24292EFF"}},"             /BSPRQR/ NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            I, J, JB, ITEMP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   R, COSINE, SINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"External"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      EXTERNAL"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           DLARTG, DROT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. "),s("span",{style:{"--shiki-light":"#D32F2F"}},"Intrinsic"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTRINSIC"),s("span",{style:{"--shiki-light":"#24292EFF"}},"          MIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      INFO "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     Quick "),s("span",{style:{"--shiki-light":"#D32F2F"}},"return"),s("span",{style:{"--shiki-light":"#24292EFF"}}," if possible.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".OR."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".OR."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( N"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $   "),s("span",{style:{"--shiki-light":"#D32F2F"}},"RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( NB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"        Block"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Algorithm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"        =============="),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Compute Givens Rotations needed to nullify the first column")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        of matrix A and apply on the fly to that column. Store")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        temporally the sine and cosine of the angles of the applied")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Givens Rotations in vector WORK.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 10"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," M, "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DLARTG"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( A( I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), A( I, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   WORK( I ), WORK( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I ), R )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            A( I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," R")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            A( I, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 10"),s("span",{style:{"--shiki-light":"#D32F2F"}},"      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Apply the previously computed Givens Rotations to the rest")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        of matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 20"),s("span",{style:{"--shiki-light":"#24292EFF"}}," J "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," 2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", N, NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            JB "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( NB, N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"J"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 30"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, J"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"JB"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), J, "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( J"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"JB"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I, A( I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", I ), LDA, A( I, I ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                    WORK( I ), WORK( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 30"),s("span",{style:{"--shiki-light":"#D32F2F"}},"         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 40"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( M, J"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JB, A( I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", J ), LDA, A( I, J ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                    WORK( I ), WORK( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 40"),s("span",{style:{"--shiki-light":"#D32F2F"}},"         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 20"),s("span",{style:{"--shiki-light":"#D32F2F"}},"      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Update the corresponding part of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".AND."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           Apply the previously computed rotations from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 50"),s("span",{style:{"--shiki-light":"#24292EFF"}}," J "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#1976D2"}}," 1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", K, NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"               JB "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#6F42C1"}}," MIN"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( NB, K"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"J"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 60"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," M, "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"                  CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JB, C( I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", J ), LDC, C( I, J ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                      WORK( I ), WORK( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 60"),s("span",{style:{"--shiki-light":"#D32F2F"}},"            CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 50"),s("span",{style:{"--shiki-light":"#D32F2F"}},"         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         ELSE IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".AND."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           Apply the transpose of the previously computed rotations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 70"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," M, "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K, C( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", I"),s("span",{style:{"--shiki-light":"#1976D2"}},"-1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", C( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", I ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                   WORK( I ), WORK( M"),s("span",{style:{"--shiki-light":"#D32F2F"}},"+"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 70"),s("span",{style:{"--shiki-light":"#D32F2F"}},"         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"        Non"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-Block"),s("span",{style:{"--shiki-light":"#24292EFF"}}," Algorithm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"        =================="),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"         DO"),s("span",{style:{"--shiki-light":"#1976D2"}}," 90"),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," M, "),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}},", "),s("span",{style:{"--shiki-light":"#1976D2"}},"-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            ITEMP "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," I "),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#1976D2"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           Compute the rotation parameters and update column "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," of A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DLARTG"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( A( ITEMP, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), A( I , "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), COSINE, SINE, R )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            A( ITEMP, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," R")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"            A( I, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-light":"#24292EFF"}}," ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           Update columns I:N of matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( N"),s("span",{style:{"--shiki-light":"#D32F2F"}},"-"),s("span",{style:{"--shiki-light":"#24292EFF"}},"I"),s("span",{style:{"--shiki-light":"#1976D2"}},"+1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", A( ITEMP, I ), LDA, A( I, I ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                 COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"           Update the corresponding part of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"2"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".AND."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"              Apply the previously computed rotations from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K, C( ITEMP, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), LDC, C( I, "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                     COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            ELSE IF"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( ( JOB"),s("span",{style:{"--shiki-light":"#D32F2F"}},".EQ."),s("span",{style:{"--shiki-light":"#1976D2"}},"3"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )"),s("span",{style:{"--shiki-light":"#D32F2F"}},".AND."),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K"),s("span",{style:{"--shiki-light":"#D32F2F"}},".GT."),s("span",{style:{"--shiki-light":"#1976D2"}},"0"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ) ) "),s("span",{style:{"--shiki-light":"#D32F2F"}},"THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"              Apply the transpose of the previously computed rotations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"              from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"               CALL"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DROT"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( K, C( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", ITEMP ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", C( "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},", I ), "),s("span",{style:{"--shiki-light":"#1976D2"}},"1"),s("span",{style:{"--shiki-light":"#24292EFF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"     $                     COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"            END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1976D2"}}," 90"),s("span",{style:{"--shiki-light":"#D32F2F"}},"      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      END "),s("span",{style:{"--shiki-light":"#D32F2F"}},"IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     End of DGRET")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292EFF"}},"      END")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      SUBROUTINE"),s("span",{style:{"--shiki-light":"#6F42C1"}}," DHESS"),s("span",{style:{"--shiki-light":"#24292EFF"}},"( JOB, M, N, K, A, LDA, C, LDC, WORK, INFO )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Scalar Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      INTEGER"),s("span",{style:{"--shiki-light":"#24292EFF"}},"            JOB, M, N, K, LDA, LDC, INFO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     .. Array Arguments ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"      DOUBLE PRECISION"),s("span",{style:{"--shiki-light":"#24292EFF"}},"   A( LDA, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), C( LDC, "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," ), WORK( "),s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}}," )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Purpose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ======"),s("span",{style:{"--shiki-light":"#24292EFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  DHESS reduces the upper hessemberg matrix A to upper triangular form.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  applied to matrix C "),s("span",{style:{"--shiki-light":"#D32F2F"}},"if"),s("span",{style:{"--shiki-light":"#24292EFF"}}," argument JOB asks.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  This "),s("span",{style:{"--shiki-light":"#D32F2F"}},"subroutine"),s("span",{style:{"--shiki-light":"#6F42C1"}}," assumes"),s("span",{style:{"--shiki-light":"#24292EFF"}}," that in all cases N>=M.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#24292EFF"}},"  Parameters")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D32F2F"}},"*"),s("span",{style:{"--shiki-light":"#D32F2F"}},"  ==========")]),i(`
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
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  WORK    (workspace) DOUBLE PRECISION array, dimension ( 2*M )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          If the block algorithm is used, the size of this workspace")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          must be ( 2*M ).")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          In this case this vector will contain the sines and cosines")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          of the angles of the Givens Rotations to be applied.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  INFO    (output) INTEGER")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          = 0: Successful exit.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*          < 0: If info = -i, the i-th argument had an illegal value.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*  =====================================================================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Parameters ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      PARAMETER          ( ZERO = 0.0D+0 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Common Blocks ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      COMMON             /BSPRQR/ NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Local Scalars ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTEGER            I, J, ITEMP, JB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      DOUBLE PRECISION   R, COSINE, SINE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. External Subroutines ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      EXTERNAL           DLARTG, DROT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Intrinsic Functions ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INTRINSIC          MIN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     .. Executable Statements ..")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      INFO = 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     Quick return if possible.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( ( M.EQ.0 ).OR.( M.EQ.1 ).OR.( N.EQ.0 ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $   RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      IF( NB.GT.1 ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Block Algorithm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        ===============")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Compute Givens Rotations needed to reduce upper hessenberg")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        matrix A to triangular form, and apply on the fly those")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        rotations to matrix. Store temporally the sine and cosine")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        of the angles of the applied Givens Rotations in vector WORK.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         DO 10 J = 1, N, NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            JB = MIN( NB, N-J+1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 20 I = 2, MIN( M, J )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DROT( JB, A( I-1, J ), LDA, A( I, J ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    WORK( I ), WORK( M+I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 20         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 30 I = J+1, MIN( M, J+JB )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               ITEMP = I-1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DLARTG( A( ITEMP, ITEMP ), A( I, ITEMP ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                      WORK( I ), WORK( M+I ), R )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               A( ITEMP, ITEMP ) = R")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               A( I, ITEMP ) = ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DROT( J+JB-I, A( ITEMP, I ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    A( I, I ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    WORK( I ), WORK( M+I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 30         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 10      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Update the corresponding part of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Apply the previously computed rotations from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 40 J = 1, K, NB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               JB = MIN( NB, K-J+1 )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               DO 50 I = 2, M")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"                  CALL DROT( JB, C( I-1, J ), LDC, C( I, J ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                       WORK( I ), WORK( M+I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 50            CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 40         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Apply the transpose of the previously computed rotations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            DO 60 I = 2, M")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DROT( K, C( 1, I-1 ), 1, C( 1, I ), 1,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    WORK( I ), WORK( M+I ) )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 60         CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      ELSE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        Non-Block Algorithm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*        ===================")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"         DO 80 I = 2, M")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            ITEMP = I - 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Compute the rotation parameters.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DLARTG( A( ITEMP, ITEMP ), A( I, ITEMP ),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                   COSINE, SINE, R )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Update columns I-1:N of matrix A.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            A( ITEMP, ITEMP ) = R")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            A( I, ITEMP ) = ZERO")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            CALL DROT( N-I+1, A( ITEMP, I ), LDA, A( I, I ), LDA,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                 COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*           Update the corresponding part of matrix C.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            IF( ( JOB.EQ.2 ).AND.( K.GT.0 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*              Apply the previously computed rotations from the left.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DROT( K, C( ITEMP, 1 ), LDC, C( I, 1 ), LDC,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            ELSE IF( ( JOB.EQ.3 ).AND.( K.GT.0 ) ) THEN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*              Apply the transpose of the previously computed rotations")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*              from the right.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"               CALL DROT( K, C( 1, ITEMP ), 1, C( 1, I ), 1,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"     $                    COSINE, SINE )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"            END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}}," 80      CONTINUE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END IF")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      RETURN")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*     End of DHESS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A"}},"      END")])])],-1)])),_:1},16)]),_:1},16)}}};export{T as default};
