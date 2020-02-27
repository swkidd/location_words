{"filter":false,"title":"markerstore.js","tooltip":"/src/components/map_editor/utils/markerstore.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["","import Amplify, { Hub } from \"@aws-amplify/core\";","import { DataStore, Predicates } from \"@aws-amplify/datastore\";","import { MarkerType } from \"../models\";","import { withAuthenticator } from \"aws-amplify-react\";",""],"id":1}],[{"start":{"row":5,"column":0},"end":{"row":12,"column":5},"action":"insert","lines":["","    const onDel = elm => async() => {","        setState({ ...state, markers: state.markers.filter(s => s.id !== elm.id) })","        if (elm.saved) {","            const toDelete = await DataStore.query(MarkerType, elm.id);","            await DataStore.delete(toDelete);","        }","    }"],"id":2}],[{"start":{"row":12,"column":5},"end":{"row":30,"column":0},"action":"insert","lines":["","    const onSubmit = elm => () => {","        DataStore.save(","            new MarkerType({","                id: elm.id,","                lat: elm.lat,","                lng: elm.lng,","                zoom: elm.zoom,","                text: elm.text,","            })","        );","        listMarkers();","    };","","    async function listMarkers() {","        const markers = await DataStore.query(MarkerType, Predicates.ALL);","        setMarkers(markers.map(m => ({...m, saved: true})));","    }",""],"id":3}],[{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":31,"column":0},"end":{"row":61,"column":11},"action":"insert","lines":["","    useEffect(() => {","        console.log(\"use effect\");","        listMarkers();","","        const listener = (data) => {","            if (data.payload.event === \"signOut\") {","                DataStore.clear();","            }","        }","        Hub.listen('auth', listener);","","        /*const subscription = DataStore.observe(MarkerType).subscribe(msg => {","            listMarkers();","            console.log(\"subscription update\");","        });*/","","        const handleConnectionChange = () => {","            const condition = navigator.onLine ? \"online\" : \"offline\";","            console.log(condition);","            if (condition === \"online\") {","                listMarkers();","            }","        };","","        window.addEventListener(\"online\", handleConnectionChange);","        window.addEventListener(\"offline\", handleConnectionChange);","","        //return () => subscription.unsubscribe();","        return () => {};","    }, []);"],"id":5}],[{"start":{"row":4,"column":54},"end":{"row":13,"column":13},"action":"insert","lines":["","            {state.modal && ","                <div style={styles.modal}>","                    <div style={styles.modalContent}>{JSON.stringify(state.markers)}</div>","                    <button ","                        style={styles.closeBtn} ","                        onClick={() => setState({...state, modal: !state.modal})}","                    >close</button>","                </div>","            }"],"id":7}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":54},"end":{"row":4,"column":54},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1582702484283,"hash":"0c713d0ab052b40b8a0368a40fb4d98745c8838f"}