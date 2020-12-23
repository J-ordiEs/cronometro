window.onload = () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
    btnStart = document.getElementById("btn-start");
    btnPause = document.getElementById("btn-pause");
    btnReset = document.getElementById("btn-reset");
};

function event() {
    btnStart.addEventListener("click", start);
    btnPause.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
}

function write() {
    let ht, mt, st, mlst;
    mls++;

    if (mls > 99) {
        s++;
        mls = 0;
    }
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    if (h > 24) {
        h = 0;
    }
}