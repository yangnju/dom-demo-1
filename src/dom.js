window.dom = {
    find(selector, scope){  //传入选择器，范围
        return (scope || document).querySelectorAll(selector)  //如果有scope，就在scope里寻找selector，如果没有，就在document里寻找selector
      },
    style(node, name, value){
        if(arguments.length===3){  //如果有三个参数，比如：dom.style(div, 'color', 'red')
        node.style[name] = value
        }else if(arguments.length===2){   
        if(typeof name === 'string'){  //两个参数时，name的类型是字符串。比如dom.style(div, 'color')
            return node.style[name]  //返回name这个属性的值
        }else if(name instanceof Object){  //两个参数时，如果name的类型是对象，比如 dom.style(div, {color: 'red'})
            const object = name
            for(let key in object){  //取到object里所有的key值，比如color，border
            node.style[key] = object[key]  //将输入的属性值赋值给node
            }
        }
        }
    },
    each(nodeList, fn){
        for(let i=0;i<nodeList.length;i++){
          fn.call(null, nodeList[i])
        }
      },
}