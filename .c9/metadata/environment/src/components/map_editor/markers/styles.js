{"filter":false,"title":"styles.js","tooltip":"/src/components/map_editor/markers/styles.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":14,"column":5},"action":"insert","lines":["","    const markerStyles = zoom => {","        //markers are in view for two zooms in and one out ","        const zoomDif = state.zoom - zoom;","        const scale = (zoomDif < -1 || zoomDif > 1) ? 0 : 1 + zoomDif / 2;","        let markerStyle = {}","        if (zoom < 15) {","            markerStyle = {}","        }","","        return {","            ...markerStyle,","            transform: `translate(-50%, -50%) scale(${scale})`,","        }","    }"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":4},"end":{"row":1,"column":4},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":39,"mode":"ace/mode/javascript"}},"timestamp":1582702432526,"hash":"af67f978a4fc85e6e8a7ed143a68cb7feebca60e"}