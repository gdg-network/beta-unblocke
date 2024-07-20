            },
        }
    );

    client.nativeMethods.defineProperty(
        window.Object.prototype,
        __uv.methods.top,
        {
            configurable: true,
            get() {
                const val = this.top;

                if (this === window) {
                    if (val === this.parent) return this[__uv.methods.parent];
                    try {
                        if (!('__uv' in val)) {
                            let current = this;

                            while (current.parent !== val) {
                                current = current.parent;
                            }

                            return '__uv' in current ? current : this;
                        } else {
                            return val;
                        }
                    } catch (e) {
                        return this;
                    }
                }
                return val;
            },
            set(val) {
                this.top = val;
            },
        }
    );

    client.nativeMethods.defineProperty(
        window.Object.prototype,
        __uv.methods.eval,
        {
            configurable: true,
            get() {
                return this === window ? __uv.eval : this.eval;
            },
            set(val) {
                this.eval = val;
            },
        }
    );
}
