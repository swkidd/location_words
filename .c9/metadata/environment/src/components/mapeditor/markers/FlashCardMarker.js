{"filter":false,"title":"FlashCardMarker.js","tooltip":"/src/components/mapeditor/markers/FlashCardMarker.js","undoManager":{"mark":41,"position":41,"stack":[[{"start":{"row":14,"column":0},"end":{"row":25,"column":14},"action":"remove","lines":["        <div","            className=\"font-weight-bold h3\"","            style={{...markerStyles(currentZoom, zoom), width: \"1em\"}}","            onClick={() => {","                setShowFront(!showFront)","                if (nextMarker && !showFront) {","                    nextMarker()","                }","            }}","        >","            {showFront ? frontText : backText}","        </div>"],"id":981},{"start":{"row":14,"column":0},"end":{"row":30,"column":18},"action":"insert","lines":["        <Popover ","            placement=\"top\" ","            style={{...style, overflowWrap: \"break-word\"}} ","            >","            <Popover.Title as=\"h1\" style={{textAlign: \"center\", fontSize: \"2rem\"}}>","                <ruby>{word}<rt>{kana}</rt></ruby>","            </Popover.Title>","            <Popover.Content style={{overflowY: \"auto\", maxWidth: \"100%\", fontSize: \"2rem\" }}>","                {en}","                {/*","                <ButtonGroup>","                    <Button onClick={() => goTo(\"words\", prev.name)} variant=\"secondary\">{prev.name}</Button>","                    <Button onClick={() => goTo(\"words\", next.name)} variant=\"secondary\">{next.name}</Button>","                </ButtonGroup>","                */}","            </Popover.Content>","        </Popover>"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["s"],"id":982},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["t"]},{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":["y"]},{"start":{"row":11,"column":30},"end":{"row":11,"column":31},"action":"insert","lines":["l"]},{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["e"]},{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":[","]}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":[" "],"id":983}],[{"start":{"row":23,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["                {/*","                <ButtonGroup>","                    <Button onClick={() => goTo(\"words\", prev.name)} variant=\"secondary\">{prev.name}</Button>","                    <Button onClick={() => goTo(\"words\", next.name)} variant=\"secondary\">{next.name}</Button>","                </ButtonGroup>","                */}",""],"id":984}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["                <ruby>{word}<rt>{kana}</rt></ruby>",""],"id":985}],[{"start":{"row":18,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["            <Popover.Title as=\"h1\" style={{textAlign: \"center\", fontSize: \"2rem\"}}>","            </Popover.Title>",""],"id":986}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":19},"action":"remove","lines":["en"],"id":987}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["s"],"id":988},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["h"]},{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["o"]},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["w"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["F"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["r"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["o"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["n"]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":[","],"id":989}],[{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"insert","lines":[" "],"id":990}],[{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"remove","lines":[" "],"id":991},{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"remove","lines":[","]}],[{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":[" "],"id":992},{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"insert","lines":["?"]}],[{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"insert","lines":[" "],"id":993},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"insert","lines":["f"]},{"start":{"row":19,"column":30},"end":{"row":19,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":19,"column":31},"end":{"row":19,"column":32},"action":"insert","lines":["o"],"id":994},{"start":{"row":19,"column":32},"end":{"row":19,"column":33},"action":"insert","lines":["n"]},{"start":{"row":19,"column":33},"end":{"row":19,"column":34},"action":"insert","lines":["t"]},{"start":{"row":19,"column":34},"end":{"row":19,"column":35},"action":"insert","lines":["T"]},{"start":{"row":19,"column":35},"end":{"row":19,"column":36},"action":"insert","lines":["e"]},{"start":{"row":19,"column":36},"end":{"row":19,"column":37},"action":"insert","lines":["x"]},{"start":{"row":19,"column":37},"end":{"row":19,"column":38},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":38},"end":{"row":19,"column":39},"action":"insert","lines":[" "],"id":995},{"start":{"row":19,"column":39},"end":{"row":19,"column":40},"action":"insert","lines":[":"]}],[{"start":{"row":19,"column":40},"end":{"row":19,"column":41},"action":"insert","lines":[" "],"id":996},{"start":{"row":19,"column":41},"end":{"row":19,"column":42},"action":"insert","lines":["b"]},{"start":{"row":19,"column":42},"end":{"row":19,"column":43},"action":"insert","lines":["a"]},{"start":{"row":19,"column":43},"end":{"row":19,"column":44},"action":"insert","lines":["c"]},{"start":{"row":19,"column":44},"end":{"row":19,"column":45},"action":"insert","lines":["k"]},{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"insert","lines":["T"]},{"start":{"row":19,"column":46},"end":{"row":19,"column":47},"action":"insert","lines":["e"]},{"start":{"row":19,"column":47},"end":{"row":19,"column":48},"action":"insert","lines":["x"]}],[{"start":{"row":19,"column":48},"end":{"row":19,"column":49},"action":"insert","lines":["t"],"id":997}],[{"start":{"row":19,"column":49},"end":{"row":19,"column":50},"action":"insert","lines":[" "],"id":998}],[{"start":{"row":0,"column":39},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":999},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["i"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["m"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["p"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["o"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["r"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":[" "],"id":1000},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["P"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["o"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":10},"action":"remove","lines":["Pop"],"id":1001},{"start":{"row":2,"column":7},"end":{"row":2,"column":14},"action":"insert","lines":["Popover"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":[" "],"id":1002},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["f"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["r"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["o"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["m"]}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":[" "],"id":1003}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":22},"action":"insert","lines":["''"],"id":1004}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["b"],"id":1005},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["o"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["o"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["t"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["s"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["t"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["r"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["p"],"id":1006},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["-"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["r"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["e"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["a"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["c"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["t"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["/"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["P"]}],[{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["o"],"id":1007},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["p"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["o"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["v"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["e"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":45},"end":{"row":3,"column":45},"action":"insert","lines":["","import Popover from 'react-bootstrap/Popover'"],"id":1008}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["import Popover from 'bootstrap-react/Popover'",""],"id":1009}],[{"start":{"row":17,"column":28},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":1010},{"start":{"row":18,"column":0},"end":{"row":18,"column":12},"action":"insert","lines":["            "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["o"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["n"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["C"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["l"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["i"],"id":1011},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["c"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["k"]}],[{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":[" "],"id":1012},{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["="]}],[{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":[" "],"id":1013},{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["{"]}],[{"start":{"row":18,"column":23},"end":{"row":18,"column":25},"action":"insert","lines":["()"],"id":1014}],[{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":[" "],"id":1015},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["+"]},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":[">"]}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"remove","lines":[">"],"id":1016},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"remove","lines":["+"]}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["="],"id":1017},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":[">"]}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":[" "],"id":1018},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["s"]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["e"]},{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"insert","lines":["t"]},{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["S"]},{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":["h"]},{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":["o"]},{"start":{"row":18,"column":35},"end":{"row":18,"column":36},"action":"insert","lines":["w"]}],[{"start":{"row":18,"column":36},"end":{"row":18,"column":37},"action":"insert","lines":["F"],"id":1019},{"start":{"row":18,"column":37},"end":{"row":18,"column":38},"action":"insert","lines":["r"]},{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"insert","lines":["o"]},{"start":{"row":18,"column":39},"end":{"row":18,"column":40},"action":"insert","lines":["n"]},{"start":{"row":18,"column":40},"end":{"row":18,"column":41},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":41},"end":{"row":18,"column":43},"action":"insert","lines":["()"],"id":1020}],[{"start":{"row":18,"column":42},"end":{"row":18,"column":43},"action":"insert","lines":["!"],"id":1021},{"start":{"row":18,"column":43},"end":{"row":18,"column":44},"action":"insert","lines":["s"]},{"start":{"row":18,"column":44},"end":{"row":18,"column":45},"action":"insert","lines":["h"]},{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":["o"]},{"start":{"row":18,"column":46},"end":{"row":18,"column":47},"action":"insert","lines":["w"]},{"start":{"row":18,"column":47},"end":{"row":18,"column":48},"action":"insert","lines":["F"]},{"start":{"row":18,"column":48},"end":{"row":18,"column":49},"action":"insert","lines":["r"]},{"start":{"row":18,"column":49},"end":{"row":18,"column":50},"action":"insert","lines":["o"]},{"start":{"row":18,"column":50},"end":{"row":18,"column":51},"action":"insert","lines":["n"]},{"start":{"row":18,"column":51},"end":{"row":18,"column":52},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":53},"end":{"row":18,"column":54},"action":"insert","lines":["}"],"id":1022}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":30},"end":{"row":18,"column":30},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1586920325635,"hash":"5cc3eacd0d323716032ca1ad197b59ae59d19814"}