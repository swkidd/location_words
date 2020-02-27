{"filter":false,"title":"map-editor.js","tooltip":"/src/pages/map-editor.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["e"],"id":199}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["n"],"id":200}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["t"],"id":201}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["i"],"id":202}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["c"],"id":203}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["a"],"id":204}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["i"],"id":205}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["o"],"id":206}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"remove","lines":["n"],"id":207}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"insert","lines":["w"],"id":208},{"start":{"row":63,"column":16},"end":{"row":63,"column":17},"action":"insert","lines":["i"]},{"start":{"row":63,"column":17},"end":{"row":63,"column":18},"action":"insert","lines":["t"]},{"start":{"row":63,"column":18},"end":{"row":63,"column":19},"action":"insert","lines":["h"]},{"start":{"row":63,"column":19},"end":{"row":63,"column":20},"action":"insert","lines":["A"]},{"start":{"row":63,"column":20},"end":{"row":63,"column":21},"action":"insert","lines":["u"]}],[{"start":{"row":63,"column":15},"end":{"row":63,"column":21},"action":"remove","lines":["withAu"],"id":209},{"start":{"row":63,"column":15},"end":{"row":63,"column":32},"action":"insert","lines":["withAuthenticator"]}],[{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"insert","lines":["("],"id":210}],[{"start":{"row":63,"column":46},"end":{"row":63,"column":47},"action":"insert","lines":[")"],"id":211}],[{"start":{"row":36,"column":5},"end":{"row":61,"column":11},"action":"insert","lines":["","    useEffect(() => {","        console.log(\"use effect\");","        listMarkers();","","        const listener = (data) => {","            if (data.payload.event === \"signOut\") {","                DataStore.clear();","            }","        }","        Hub.listen('auth', listener);","","        const handleConnectionChange = () => {","            const condition = navigator.onLine ? \"online\" : \"offline\";","            console.log(condition);","            if (condition === \"online\") {","                listMarkers();","            }","        };","","        window.addEventListener(\"online\", handleConnectionChange);","        window.addEventListener(\"offline\", handleConnectionChange);","","        //return () => subscription.unsubscribe();","        return () => {};","    }, []);"],"id":212}],[{"start":{"row":37,"column":4},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":213},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["const reducer = () => {}",""],"id":214}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["i"],"id":215},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["m"]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["p"]},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["o"]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["r"]},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":[" "],"id":216},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["{"]}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":[" "],"id":217},{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["r"]},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["e"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["t"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["u"]},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["d"]}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"remove","lines":["d"],"id":218},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"remove","lines":["u"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["t"]}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["d"],"id":219},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["u"]},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["c"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["e"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["r"]}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":[" "],"id":220},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["f"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["r"]}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"remove","lines":["r"],"id":221},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"remove","lines":["f"]}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["}"],"id":222}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":[" "],"id":223},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["f"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["r"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["o"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["m"]}],[{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":[" "],"id":224}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":26},"action":"insert","lines":["\"\""],"id":225}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["."],"id":226},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["."]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["/"]},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["c"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["o"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["m"]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["p"]},{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["o"]},{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["n"]},{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["e"]},{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["n"]},{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["t"]},{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["/"],"id":227},{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["m"]},{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["a"]},{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["p"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["e"]},{"start":{"row":9,"column":43},"end":{"row":9,"column":44},"action":"insert","lines":["d"]},{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":["i"]},{"start":{"row":9,"column":45},"end":{"row":9,"column":46},"action":"insert","lines":["t"]},{"start":{"row":9,"column":46},"end":{"row":9,"column":47},"action":"insert","lines":["o"]}],[{"start":{"row":9,"column":47},"end":{"row":9,"column":48},"action":"insert","lines":["r"],"id":228},{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":49},"end":{"row":9,"column":50},"action":"insert","lines":["m"],"id":229},{"start":{"row":9,"column":50},"end":{"row":9,"column":51},"action":"insert","lines":["a"]},{"start":{"row":9,"column":51},"end":{"row":9,"column":52},"action":"insert","lines":["r"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":["k"]},{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":["e"]},{"start":{"row":9,"column":54},"end":{"row":9,"column":55},"action":"insert","lines":["r"]},{"start":{"row":9,"column":55},"end":{"row":9,"column":56},"action":"insert","lines":["s"]},{"start":{"row":9,"column":56},"end":{"row":9,"column":57},"action":"insert","lines":["t"]},{"start":{"row":9,"column":57},"end":{"row":9,"column":58},"action":"insert","lines":["o"]}],[{"start":{"row":9,"column":58},"end":{"row":9,"column":59},"action":"insert","lines":["r"],"id":230},{"start":{"row":9,"column":59},"end":{"row":9,"column":60},"action":"insert","lines":["e"]}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "],"id":231}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "],"id":232}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":8},"action":"insert","lines":["    "],"id":233}],[{"start":{"row":40,"column":8},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":234},{"start":{"row":41,"column":0},"end":{"row":41,"column":8},"action":"insert","lines":["        "]},{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["/"]},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["*"]}],[{"start":{"row":59,"column":0},"end":{"row":59,"column":4},"action":"insert","lines":["    "],"id":235}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":8},"action":"insert","lines":["    "],"id":236}],[{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"insert","lines":["*"],"id":237},{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"insert","lines":["/"]}],[{"start":{"row":60,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["        //return () => subscription.unsubscribe();",""],"id":238}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["        listMarkers();",""],"id":239}],[{"start":{"row":38,"column":34},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":240},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"insert","lines":["        "]},{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["d"]},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["i"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["s"]},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["p"]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["a"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["c"],"id":241},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["h"]}],[{"start":{"row":39,"column":16},"end":{"row":39,"column":18},"action":"insert","lines":["()"],"id":242}],[{"start":{"row":39,"column":17},"end":{"row":39,"column":19},"action":"insert","lines":["{}"],"id":243}],[{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":[" "],"id":244},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["t"]},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["y"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"insert","lines":["p"]},{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"insert","lines":["e"]},{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"insert","lines":[":"]}],[{"start":{"row":39,"column":24},"end":{"row":39,"column":25},"action":"insert","lines":[" "],"id":245}],[{"start":{"row":39,"column":25},"end":{"row":39,"column":27},"action":"insert","lines":["\"\""],"id":246}],[{"start":{"row":39,"column":26},"end":{"row":39,"column":27},"action":"insert","lines":["l"],"id":247},{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":["i"]},{"start":{"row":39,"column":28},"end":{"row":39,"column":29},"action":"insert","lines":["s"]},{"start":{"row":39,"column":29},"end":{"row":39,"column":30},"action":"insert","lines":["t"]}],[{"start":{"row":39,"column":31},"end":{"row":39,"column":32},"action":"insert","lines":[" "],"id":248}],[{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["/"],"id":249},{"start":{"row":9,"column":49},"end":{"row":9,"column":50},"action":"insert","lines":["u"]},{"start":{"row":9,"column":50},"end":{"row":9,"column":51},"action":"insert","lines":["t"]},{"start":{"row":9,"column":51},"end":{"row":9,"column":52},"action":"insert","lines":["i"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":["l"]},{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":46},"action":"insert","lines":["/src/components/mapeditor/utils/markerstore.js"],"id":250}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":67},"action":"remove","lines":["../components/mapeditor/utils/markerstore\""],"id":251}],[{"start":{"row":9,"column":24},"end":{"row":10,"column":46},"action":"remove","lines":["\"","/src/components/mapeditor/utils/markerstore.js"],"id":252},{"start":{"row":9,"column":24},"end":{"row":9,"column":72},"action":"insert","lines":["\" /src/components/mapeditor/utils/markerstore.js"]}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":[" "],"id":253}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["/"],"id":254}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["s"],"id":255}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["r"],"id":256}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["c"],"id":257}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["."],"id":258},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"remove","lines":["."],"id":259}],[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"remove","lines":["j"],"id":260}],[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"remove","lines":["s"],"id":261}],[{"start":{"row":9,"column":66},"end":{"row":9,"column":67},"action":"insert","lines":["\""],"id":262}],[{"start":{"row":9,"column":67},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":263}],[{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"insert","lines":["m"],"id":264},{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"insert","lines":["a"]},{"start":{"row":74,"column":23},"end":{"row":74,"column":24},"action":"insert","lines":["r"]},{"start":{"row":74,"column":24},"end":{"row":74,"column":25},"action":"insert","lines":["k"]},{"start":{"row":74,"column":25},"end":{"row":74,"column":26},"action":"insert","lines":["e"]},{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":["r"]},{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":74,"column":28},"end":{"row":74,"column":29},"action":"insert","lines":[" "],"id":265},{"start":{"row":74,"column":29},"end":{"row":74,"column":30},"action":"insert","lines":["&"]},{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"insert","lines":["&"]}],[{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"insert","lines":[" "],"id":266}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["a"],"id":267},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["w"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["a"]},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["i"]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":[" "],"id":268}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":14},"action":"remove","lines":["await "],"id":269}],[{"start":{"row":39,"column":34},"end":{"row":39,"column":35},"action":"insert","lines":["."],"id":270},{"start":{"row":39,"column":35},"end":{"row":39,"column":36},"action":"insert","lines":["t"]},{"start":{"row":39,"column":36},"end":{"row":39,"column":37},"action":"insert","lines":["h"]},{"start":{"row":39,"column":37},"end":{"row":39,"column":38},"action":"insert","lines":["e"]},{"start":{"row":39,"column":38},"end":{"row":39,"column":39},"action":"insert","lines":["n"]}],[{"start":{"row":39,"column":39},"end":{"row":39,"column":41},"action":"insert","lines":["()"],"id":271}],[{"start":{"row":39,"column":40},"end":{"row":39,"column":41},"action":"insert","lines":["c"],"id":272},{"start":{"row":39,"column":41},"end":{"row":39,"column":42},"action":"insert","lines":["o"]},{"start":{"row":39,"column":42},"end":{"row":39,"column":43},"action":"insert","lines":["n"]},{"start":{"row":39,"column":43},"end":{"row":39,"column":44},"action":"insert","lines":["s"]},{"start":{"row":39,"column":44},"end":{"row":39,"column":45},"action":"insert","lines":["o"]},{"start":{"row":39,"column":45},"end":{"row":39,"column":46},"action":"insert","lines":["l"]},{"start":{"row":39,"column":46},"end":{"row":39,"column":47},"action":"insert","lines":["e"]},{"start":{"row":39,"column":47},"end":{"row":39,"column":48},"action":"insert","lines":["."]},{"start":{"row":39,"column":48},"end":{"row":39,"column":49},"action":"insert","lines":["o"]}],[{"start":{"row":39,"column":48},"end":{"row":39,"column":49},"action":"remove","lines":["o"],"id":273}],[{"start":{"row":39,"column":48},"end":{"row":39,"column":49},"action":"insert","lines":["l"],"id":274},{"start":{"row":39,"column":49},"end":{"row":39,"column":50},"action":"insert","lines":["o"]},{"start":{"row":39,"column":50},"end":{"row":39,"column":51},"action":"insert","lines":["g"]}],[{"start":{"row":39,"column":51},"end":{"row":39,"column":53},"action":"insert","lines":["()"],"id":275}],[{"start":{"row":39,"column":52},"end":{"row":39,"column":53},"action":"insert","lines":["m"],"id":276},{"start":{"row":39,"column":53},"end":{"row":39,"column":54},"action":"insert","lines":["a"]},{"start":{"row":39,"column":54},"end":{"row":39,"column":55},"action":"insert","lines":["r"]},{"start":{"row":39,"column":55},"end":{"row":39,"column":56},"action":"insert","lines":["k"]},{"start":{"row":39,"column":56},"end":{"row":39,"column":57},"action":"insert","lines":["e"]},{"start":{"row":39,"column":57},"end":{"row":39,"column":58},"action":"insert","lines":["r"]},{"start":{"row":39,"column":58},"end":{"row":39,"column":59},"action":"insert","lines":["s"]}],[{"start":{"row":39,"column":61},"end":{"row":39,"column":62},"action":"insert","lines":[";"],"id":277}],[{"start":{"row":39,"column":61},"end":{"row":39,"column":62},"action":"remove","lines":[";"],"id":278}],[{"start":{"row":74,"column":21},"end":{"row":74,"column":29},"action":"remove","lines":["markers "],"id":279}],[{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"remove","lines":["&"],"id":280}],[{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"remove","lines":["&"],"id":281}],[{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"insert","lines":["/"],"id":282},{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"insert","lines":["*"]}],[{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["*"],"id":283},{"start":{"row":81,"column":23},"end":{"row":81,"column":24},"action":"insert","lines":["/"]}],[{"start":{"row":39,"column":34},"end":{"row":39,"column":60},"action":"remove","lines":[".then(console.log(markers)"],"id":284}],[{"start":{"row":39,"column":34},"end":{"row":39,"column":35},"action":"remove","lines":[")"],"id":285}],[{"start":{"row":34,"column":63},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":286},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"insert","lines":["        "]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["c"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["o"]},{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["n"]},{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["s"]},{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["o"]},{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["l"]},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["e"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["."]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["l"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["o"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["*"],"id":287}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":22},"action":"insert","lines":["()"],"id":288}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":22},"action":"remove","lines":["()"],"id":289},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"remove","lines":["*"]}],[{"start":{"row":35,"column":19},"end":{"row":35,"column":21},"action":"insert","lines":["()"],"id":290}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["m"],"id":291},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["a"]},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"insert","lines":["r"]},{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":["k"]},{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":["e"]},{"start":{"row":35,"column":25},"end":{"row":35,"column":26},"action":"insert","lines":["r"]},{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":35,"column":28},"end":{"row":36,"column":34},"action":"insert","lines":["","        dispatch({ type: \"list\" })"],"id":292}],[{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"insert","lines":["d"],"id":293},{"start":{"row":67,"column":25},"end":{"row":67,"column":26},"action":"insert","lines":["i"]},{"start":{"row":67,"column":26},"end":{"row":67,"column":27},"action":"insert","lines":["s"]},{"start":{"row":67,"column":27},"end":{"row":67,"column":28},"action":"insert","lines":["p"]},{"start":{"row":67,"column":28},"end":{"row":67,"column":29},"action":"insert","lines":["a"]},{"start":{"row":67,"column":29},"end":{"row":67,"column":30},"action":"insert","lines":["t"]},{"start":{"row":67,"column":30},"end":{"row":67,"column":31},"action":"insert","lines":["c"]},{"start":{"row":67,"column":31},"end":{"row":67,"column":32},"action":"insert","lines":["h"]},{"start":{"row":67,"column":32},"end":{"row":67,"column":33},"action":"insert","lines":["="]}],[{"start":{"row":67,"column":33},"end":{"row":67,"column":34},"action":"insert","lines":["{"],"id":294},{"start":{"row":67,"column":34},"end":{"row":67,"column":35},"action":"insert","lines":["d"]},{"start":{"row":67,"column":35},"end":{"row":67,"column":36},"action":"insert","lines":["i"]},{"start":{"row":67,"column":36},"end":{"row":67,"column":37},"action":"insert","lines":["s"]},{"start":{"row":67,"column":37},"end":{"row":67,"column":38},"action":"insert","lines":["p"]},{"start":{"row":67,"column":38},"end":{"row":67,"column":39},"action":"insert","lines":["a"]},{"start":{"row":67,"column":39},"end":{"row":67,"column":40},"action":"insert","lines":["t"]},{"start":{"row":67,"column":40},"end":{"row":67,"column":41},"action":"insert","lines":["c"]},{"start":{"row":67,"column":41},"end":{"row":67,"column":42},"action":"insert","lines":["h"]}],[{"start":{"row":67,"column":42},"end":{"row":67,"column":43},"action":"insert","lines":["}"],"id":295}],[{"start":{"row":67,"column":43},"end":{"row":67,"column":44},"action":"insert","lines":[" "],"id":296},{"start":{"row":67,"column":44},"end":{"row":67,"column":45},"action":"insert","lines":["m"]},{"start":{"row":67,"column":45},"end":{"row":67,"column":46},"action":"insert","lines":["a"]},{"start":{"row":67,"column":46},"end":{"row":67,"column":47},"action":"insert","lines":["r"]},{"start":{"row":67,"column":47},"end":{"row":67,"column":48},"action":"insert","lines":["k"]},{"start":{"row":67,"column":48},"end":{"row":67,"column":49},"action":"insert","lines":["e"]},{"start":{"row":67,"column":49},"end":{"row":67,"column":50},"action":"insert","lines":["r"]},{"start":{"row":67,"column":50},"end":{"row":67,"column":51},"action":"insert","lines":["s"]}],[{"start":{"row":67,"column":51},"end":{"row":67,"column":52},"action":"insert","lines":["="],"id":297},{"start":{"row":67,"column":52},"end":{"row":67,"column":53},"action":"insert","lines":["{"]},{"start":{"row":67,"column":53},"end":{"row":67,"column":54},"action":"insert","lines":["m"]},{"start":{"row":67,"column":54},"end":{"row":67,"column":55},"action":"insert","lines":["a"]},{"start":{"row":67,"column":55},"end":{"row":67,"column":56},"action":"insert","lines":["r"]},{"start":{"row":67,"column":56},"end":{"row":67,"column":57},"action":"insert","lines":["k"]},{"start":{"row":67,"column":57},"end":{"row":67,"column":58},"action":"insert","lines":["e"]},{"start":{"row":67,"column":58},"end":{"row":67,"column":59},"action":"insert","lines":["r"]},{"start":{"row":67,"column":59},"end":{"row":67,"column":60},"action":"insert","lines":["s"]}],[{"start":{"row":67,"column":60},"end":{"row":67,"column":61},"action":"insert","lines":["}"],"id":298}],[{"start":{"row":67,"column":44},"end":{"row":67,"column":61},"action":"remove","lines":["markers={markers}"],"id":299}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":20},"end":{"row":25,"column":20},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582780238624,"hash":"abe9062c7febd5a818f58f98d566421df60a9a83"}