HTMLElement.prototype.containersResizer = function(options) {
    options = options || {};

    if (options.orientation === undefined)
        return;
        
    if (options.element1 === undefined)
        return;
        
    if (options.element2 === undefined)
        return;
        
    if (options.minLength === undefined)
        options.minLength = 50;
                        
    if (options.background !== undefined)
        this.style.background = options.background;
    
    
    let isDragging = false;
    let startX, startY;
    
    if(options.orientation == "horizontal")
    {
        this.style.width = "5px";
        this.style.cursor = "col-resize";
        this.style.display = "inline-block";
        this.parentElement.style.display = 'flex';
        this.parentElement.style.flexDirection = "row";  
    }
    else
    {
        this.style.height = "5px";
        this.style.cursor = "row-resize";
        this.parentElement.style.display = 'flex';
        this.parentElement.style.flexDirection = "column";  
    }
    
    this.parentElement.style.boxSizing = "border-box";  
    
    
    this.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    const onMouseMove = (e) => {
        if (!isDragging) return;

        if (options.orientation === "vertical") {
            const dy = e.clientY - startY;
    
            const newHeight1 = options.element1.offsetHeight + dy;
            const newHeight2 = options.element2.offsetHeight - dy;
    
            if (newHeight1 > options.minLength && newHeight2 > options.minLength) {
                options.element1.style.height = newHeight1 + "px";
                options.element2.style.height = newHeight2 + "px";
                startY = e.clientY;
            }
        } else {
            const dx = e.clientX - startX;
    
            const newWidth1 = options.element1.offsetWidth + dx;
            const newWidth2 = options.element2.offsetWidth - dx;
    
            if (newWidth1 > options.minLength && newWidth2 > options.minLength) {
                options.element1.style.width = newWidth1 + "px";
                options.element2.style.width = newWidth2 + "px";
                startX = e.clientX;
            }
        }
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
}