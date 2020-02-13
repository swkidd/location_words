{"changed":true,"filter":false,"title":"useCurrentWidth.js","tooltip":"/src/utils/useCurrentWidth.js","value":"import { useState, useEffect } from 'react';\n\nconst getWidth = () => window.innerWidth \n  || document.documentElement.clientWidth \n  || document.body.clientWidth;\n\nfunction useCurrentWitdh() {\n  // save current window width in the state object\n  let [width, setWidth] = useState(getWidth());\n\n  // in this case useEffect will execute only once because\n  // it does not have any dependencies.\n  useEffect(() => {\n    // timeoutId for debounce mechanism\n    let timeoutId = null;\n    const resizeListener = () => {\n      // prevent execution of previous setTimeout\n      clearTimeout(timeoutId);\n      // change width from the state object after 150 milliseconds\n      timeoutId = setTimeout(() => setWidth(getWidth()), 150);\n    };\n    // set resize listener\n    window.addEventListener('resize', resizeListener);\n\n    // clean up function\n    return () => {\n      // remove resize listener\n      window.removeEventListener('resize', resizeListener);\n    }\n  }, [])\n\n  return width;\n}","undoManager":{"mark":-2,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["import { useState, useEffect } from 'react';","","const getWidth = () => window.innerWidth ","  || document.documentElement.clientWidth ","  || document.body.clientWidth;","","function useCurrentWitdh() {","  // save current window width in the state object","  let [width, setWidth] = useState(getWidth());","","  // in this case useEffect will execute only once because","  // it does not have any dependencies.","  useEffect(() => {","    // timeoutId for debounce mechanism","    let timeoutId = null;","    const resizeListener = () => {","      // prevent execution of previous setTimeout","      clearTimeout(timeoutId);","      // change width from the state object after 150 milliseconds","      timeoutId = setTimeout(() => setWidth(getWidth()), 150);","    };","    // set resize listener","    window.addEventListener('resize', resizeListener);","","    // clean up function","    return () => {","      // remove resize listener","      window.removeEventListener('resize', resizeListener);","    }","  }, [])","","  return width;","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":3},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":75},"action":"insert","lines":["https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c"],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["//https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c",""],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":6}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1581562996218}