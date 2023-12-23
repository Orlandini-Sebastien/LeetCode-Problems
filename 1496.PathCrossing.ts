function isPathCrossing(path: string): boolean {
    const visited = new Set();
    visited.add('0,0');
    let x : number = 0;
    let y : number = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') y += 1;
        else if (path[i] === 'E') x += 1;
        else if (path[i] === 'S') y -= 1;
        else x -= 1;
        const currentPosition = `${x},${y}`;
        if (visited.has(currentPosition)) {
            return true;
        } else {
            visited.add(currentPosition);
        }
    }
    
    return false;
};