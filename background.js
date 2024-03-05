const site = window.location.hostname
const siteurl = window.location.href

if (site.includes("yokatlas.yok.gov.tr") && siteurl.includes("lisans.php")) {
    try {

        var totaltyt
        var totalayt
        document.querySelector("#h1210a > a").click()
        var headertext = document.querySelector("body > div.row > div:nth-child(1) > div.panel.panel-default > div:nth-child(1) > h2 > strong > big").innerText
        var spacezone = document.querySelector("body > div.row > div:nth-child(1) > div.col-xs-12.col-md-12 > div.ekle108810305.pull-left")

        function sonuc(tytvalue, aytvalue) {
            const tytsonuc = document.createElement("div")
            const aytsonuc = document.createElement("div")
            tytsonuc.setAttribute("id", "tyt")
            aytsonuc.setAttribute("id", "ayt")
            tytsonuc.innerHTML = "TYT: " + tytvalue
            aytsonuc.innerHTML = "AYT: " + aytvalue
            document.querySelector("#icerik_1210a > table > thead > tr > th:nth-child(1)").append(tytsonuc)
            document.querySelector("#icerik_1210a > table > thead > tr > th:nth-child(1)").append(aytsonuc)

        }
        // Akredite programı diye bir uyarı veriyor. bu onu kapatıyor
        try {
            document.querySelector("body > div.featherlight > div > span").click()
        } catch (error) { }
        var controlzone = document.querySelector("body > div.row > div:nth-child(1) > div.panel.panel-primary > div > h3").textContent
        if (!headertext.includes("2019")) {


            if ((controlzone.includes("SAY") || controlzone.includes("EA"))) {

                setTimeout(function () {
                    var x = document.querySelector("#icerik_1210a > table > tbody").innerText
                    xarray = x.split('\t')
                    totaltyt = parseFloat(xarray[5].replace(",", ".")) + parseFloat(xarray[7].replace(",", ".")) + parseFloat(xarray[9].replace(",", ".")) + parseFloat(xarray[11].replace(",", "."))
                    totalayt = parseFloat(xarray[13].replace(",", ".")) + parseFloat(xarray[15].replace(",", ".")) + parseFloat(xarray[17].replace(",", ".")) + parseFloat(xarray[19].replace(",", "."))
                    totaltyt = Number((totaltyt).toFixed(1))
                    totalayt = Number((totalayt).toFixed(1))

                    var totaltytstr = totaltyt.toString()
                    var totalaytstr = totalayt.toString()
                    /*console.log("TYT: " + totaltytstr)
                    console.log("AYT: " + totalaytstr)*/

                    sonuc(totaltytstr, totalaytstr)


                }, 1200);


            }

            else if (controlzone.includes("SÖZ")) {
                setTimeout(function () {
                 

                    var x = document.querySelector("#icerik_1210a > table > tbody").innerText
                    xarray = x.split('\t')
                    //console.log(xarray)
                    totaltyt = parseFloat(xarray[5].replace(",", ".")) + parseFloat(xarray[7].replace(",", ".")) + parseFloat(xarray[9].replace(",", ".")) + parseFloat(xarray[11].replace(",", "."))
                    totalayt = parseFloat(xarray[13].replace(",", ".")) + parseFloat(xarray[15].replace(",", ".")) + parseFloat(xarray[17].replace(",", ".")) + parseFloat(xarray[19].replace(",", ".")) + parseFloat(xarray[21].replace(",", ".")) + parseFloat(xarray[23].replace(",", ".")) + parseFloat(xarray[25].replace(",", "."))
                    totaltyt = Number((totaltyt).toFixed(1))
                    totalayt = Number((totalayt).toFixed(1))

                    var totaltytstr = totaltyt.toString()
                    var totalaytstr = totalayt.toString()
                    /*console.log("TYT: " + totaltytstr.substring(0, 5))
                    console.log("AYT: " + totalaytstr.substring(0, 5))*/
                    sonuc(totaltytstr, totalaytstr)
                }, 1200);
            }
        }

    } catch (error) { }
}


// BURASI TYT İÇİN
if (site.includes("yokatlas.yok.gov.tr") && siteurl.includes("onlisans.php")) {
    var totaltyt
    var controlzonefortyt = document.querySelector("body > div.row > div:nth-child(1) > div.panel.panel-danger > div > h3").innerText
    document.querySelector("#h3210a > a > h4").click()
    function tytsonucfunc(tytvalue) {
        const tytsonuc2 = document.createElement("div")
        tytsonuc2.setAttribute("id", "tyt")
        tytsonuc2.innerHTML = "TYT: " + tytvalue
        document.querySelector("#icerik_3210a > table > thead > tr > th:nth-child(1)").append(tytsonuc2)
    }
    // Akredite programı diye bir uyarı veriyor. bu onu kapatıyor
    try {
        document.querySelector("body > div.featherlight > div > span").click()
    } catch (error) { }

    if (controlzonefortyt.includes("TYT")) {


        setTimeout(function () {
            var x = document.querySelector("#icerik_3210a > table > tbody").innerText
            xarray = x.split('\t')
            totaltyt = parseFloat(xarray[5].replace(",", ".")) + parseFloat(xarray[7].replace(",", ".")) + parseFloat(xarray[9].replace(",", ".")) + parseFloat(xarray[11].replace(",", "."))
            totaltyt = Number((totaltyt).toFixed(1))

            var totaltytstr = totaltyt.toString().substring(0, 5)
            //console.log("TYT: " + totaltytstr)


            tytsonucfunc(totaltytstr)


        }, 1200);
    }


}


// BURASI NETLERİ GÖSTEREN TABLO İÇİN (AYT)

if (site.includes("yokatlas.yok.gov.tr") && siteurl.includes("netler-tablo.php")) {
    console.log("we are in site that have table")

    let bttn = document.createElement("button")
    bttn.style["display"] = "block"
    bttn.style["width"] = "50px"
    bttn.style["height"] = "23px"
    bttn.style["margin-left"] = "auto"
    bttn.style["margin-right"] = "auto"
    bttn.style["background-color"] = "#F2F3F5"
    bttn.style["border-radius"] = "4px"
    bttn.style["font-family"] = "Helvetica"
    bttn.style["color"] = "#3c763d"
    
    bttn.innerHTML = 'start'
    document.querySelector("body > div.row > div.container > div > div").appendChild(bttn)
    

    if (document.querySelector("#mydata > thead > tr:nth-child(1)").innerText.split("\t").length=14 && (document.querySelector("body > div.row > div.row > div.row > div.container > div.panel.panel-info > div > h2").innerText.includes("SAY") || document.querySelector("body > div.row > div.row > div.row > div.container > div.panel.panel-info > div > h2").innerText.includes("EA"))){
    bttn.addEventListener("click",myMain)
    function myMain(){
    //window.scrollTo(0, document.body.scrollHeight)
    
    //window.scrollTo(document.body.scrollHeight, 0)
    //sitede bir kere butona basınca netleri id si sum olan bir div e yazıyoruz. bunu (id=sum olan div) daha önce oluşturmadıysak çalışacak
    if (document.getElementById("sum")==null){
    // kaç kayit gösterildiği
    let shwkayit = document.querySelector("#mydata_info").innerText.split(" ")
    shwkayit = +shwkayit[4]
    let listone = []
    let tabloBody = document.querySelector("#mydata > tbody").innerText
    tabloBody = tabloBody.split("\n")
    for (let elem of tabloBody){
    
    listone.push(elem.split("\t"));
    }


    //let tyt = (+listone[0][6].replace(",",".") + +listone[0][7].replace(",",".") + +listone[0][8].replace(",",".") + +listone[0][9].replace(",","."))
    //let ayt = (+listone[0][10].replace(",",".") + +listone[0][11].replace(",",".") + +listone[0][12].replace(",",".") + +listone[0][13].replace(",","."))
    const netlistesi = []
    let table = document.querySelectorAll("#mydata td")
    let tyt = 0
    let ayt = 0
    for (let i=0;i<shwkayit;i++){
        let tyt = 0
        let ayt = 0

        // BURADA 0.05 ÇIKARMASININ SEBEBİ, ÖNCEDEN SİTEDE 0.3 VE 0.8 İLE BİTEN NETLER 0.05 FAZLA GÖSTERİLİYORDU. MESELA 36.25 OLAN NET 36.30 OLARAK GÖSTERİLİYORDU. BU YÜZDEN 0.05 ÇIKARDIM
        //TYT
        if ((listone[i][6].endsWith(",3") || listone[i][6].endsWith(",8"))){tyt += +listone[i][6].replace(",",".")-0.05}
        else {tyt += +listone[i][6].replace(",",".")}

        if ((listone[i][7].endsWith(",3") || listone[i][7].endsWith(",8"))){tyt += +listone[i][7].replace(",",".")-0.05}
        else{tyt += +listone[i][7].replace(",",".")}
        
        if ((listone[i][8].endsWith(",3") || listone[i][8].endsWith(",8"))){tyt += +listone[i][8].replace(",",".")-0.05}
        else{tyt += +listone[i][8].replace(",",".")}
        
        if ((listone[i][9].endsWith(",3") || listone[i][9].endsWith(",8"))){tyt += +listone[i][9].replace(",",".")-0.05}
        else{tyt += +listone[i][9].replace(",",".")}

        //AYT
        if ((listone[i][10].endsWith(",3") || listone[i][10].endsWith(",8"))){ayt += +listone[i][10].replace(",",".")-0.05}
        else {ayt += +listone[i][10].replace(",",".")}

        if ((listone[i][11].endsWith(",3") || listone[i][11].endsWith(",8"))){ayt += +listone[i][11].replace(",",".")-0.05}
        else{ayt += +listone[i][11].replace(",",".")}
        
        if ((listone[i][12].endsWith(",3") || listone[i][12].endsWith(",8"))){ayt += +listone[i][12].replace(",",".")-0.05}
        else{ayt += +listone[i][12].replace(",",".")}
        
        if ((listone[i][13].endsWith(",3") || listone[i][13].endsWith(",8"))){ayt += +listone[i][13].replace(",",".")-0.05}
        else{ayt += +listone[i][13].replace(",",".")}


        //let tyt = (+listone[i][6].replace(",",".") + +listone[i][7].replace(",",".") + +listone[i][8].replace(",",".") + +listone[i][9].replace(",","."))
        //let ayt = (+listone[i][10].replace(",",".") + +listone[i][11].replace(",",".") + +listone[i][12].replace(",",".") + +listone[i][13].replace(",","."))
        //tyt = Number((tyt).toFixed(1))
        //ayt = Number((ayt).toFixed(1))
        netlistesi.push(`TYT: ${tyt} - AYT: ${ayt}`)
}

        for (let i = 0;i<table.length/15;i++){
        let x = document.createElement("div")
        x.setAttribute("id","sum")
        x.innerHTML = netlistesi[i]
        x.style["font-size"]="11px"
        table[i*15 +1].appendChild(x)
        if (typeof(x) === 'undefined'){
        console.log(x)

    }
}}}}}

