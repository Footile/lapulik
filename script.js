document.addEventListener("DOMContentLoaded", () => {

  const s1 = document.querySelector(".content");
  const s2 = document.querySelector(".screen2");
  const s3 = document.querySelector(".screen3");
  const s4 = document.querySelector(".screen4");
  const s5 = document.querySelector(".screen5");
  const s6 = document.querySelector(".screen6");
  const s7 = document.querySelector(".screen7");
  const s8 = document.querySelector(".screen8");
  const s9 = document.querySelector(".screen9");
  const s10 = document.querySelector(".screen10");

  const stack = document.querySelectorAll(".stack").forEach(stack => {

  stack.addEventListener("click", () => {

    let first = stack.firstElementChild;
    if (!first) return;

    first.classList.add("move");

    setTimeout(() => {
      first.classList.remove("move");
      stack.appendChild(first);
    }, 800);

  });

});

  const next1 = document.getElementById("next1");
  const back1 = document.getElementById("back1");

  const next2 = document.getElementById("next2");
  const back2 = document.getElementById("back2");

  const next3 = document.getElementById("next3");
  const back3 = document.getElementById("back3");

  const next4 = document.getElementById("next4");
  const back4 = document.getElementById("back4");

  const next5 = document.getElementById("next5");
  const back5 = document.getElementById("back5");

  const next6 = document.getElementById("next6");
  const back6 = document.getElementById("back6");

  const next7 = document.getElementById("next7");
  const back7 = document.getElementById("back7");

  const next8 = document.getElementById("next8");
  const back8 = document.getElementById("back8");

  const next9 = document.getElementById("next9");
  const back9 = document.getElementById("back9");

  function show(from, to) {
    if (!from || !to) return;

    from.classList.add("hidden");
    to.classList.remove("hidden");
  }

  next1?.addEventListener("click", () => show(s1, s2));
  back1?.addEventListener("click", () => show(s2, s1));

  next2?.addEventListener("click", () => show(s2, s3));
  back2?.addEventListener("click", () => show(s3, s2));

  next3?.addEventListener("click", () => show(s3, s4));
  back3?.addEventListener("click", () => show(s4, s3));

  next4?.addEventListener("click", () => show(s4, s5));
  back4?.addEventListener("click", () => show(s5, s4));

  next5?.addEventListener("click", () => show(s5, s6));
  back5?.addEventListener("click", () => show(s6, s5));

  next6?.addEventListener("click", () => show(s6, s7));
  back6?.addEventListener("click", () => show(s7, s6));

  next7?.addEventListener("click", () => show(s7, s8));
  back7?.addEventListener("click", () => show(s8, s7));

  next8?.addEventListener("click", () => show(s8, s9));
  back8?.addEventListener("click", () => show(s9, s8));

  next9?.addEventListener("click", () => show(s9, s10));
  back9?.addEventListener("click", () => show(s10, s9));
  
});