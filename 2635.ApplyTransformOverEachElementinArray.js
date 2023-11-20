/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (tab, func) => {
    const newTab = [];
  
    for (let i = 0; i < tab.length; i++) {
      const result = func(tab[i],i);
      newTab.push(result);
    }
  
    return newTab;
  };