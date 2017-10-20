class CacheProxy {
    _fetchData( url ){
      fetch('', {
        headers:{
            'X-Auth-Token':'2bae40ac69ef499e8f6b8fe18bfd39fb'
        }
      })      

        /*
         * @TODO - Uzupełnij tą metodę tak, aby zwracała Promise,
         * które spełnia się do rozkodowanego z JSON
         * obiektu. Wykorzystaj fetch() do pobrania zawartości z argumentu url.
         */
    }

    constructor() {
        this.cache = {}

        this.get = url => {
            if (url in this.cache)
                return Promise.resolve(this.cache[url]);
            else
                return this._fetchData( url ).then( data => {
                    this.cache[url] = data; return data;
                } );
        }
    }
}

module.exports = new CacheProxy();
