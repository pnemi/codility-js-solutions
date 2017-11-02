
var yourself = {
    fibonacci : function(n) {
        if (n === 0 || n === 1) {
            return n;
        }

        var acc = 0,
            prev = 1,
            prevPrev = 0;

        for (var i = 2; i <= n; i++) {
            acc = prev + prevPrev; // (n - 1) + (n - 2)
            prevPrev = prev;
            prev = acc;
        }

        return acc;
    }
};
