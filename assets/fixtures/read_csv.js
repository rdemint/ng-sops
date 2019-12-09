export function loadCSVFile() {

    document.querySelector("#file-input").addEventListener('change', function() {
        // list of selected files
        var all_files = this.files;
        if(all_files.length == 0) {
            alert('Error : No file selected');
            return;
        }
        
        // first file selected by user
        var file = all_files[0];
        
        // files types allowed
        // we are reading text file in this example
        var allowed_types = [ 'text/plain' ];
        if(allowed_types.indexOf(file.type) == -1) {
            alert('Error : Incorrect file type');
            return;
        }
        
        // Max 2 MB allowed
        var max_size_allowed = 2*1024*1024
        if(file.size > max_size_allowed) {
            alert('Error : Exceeded size 2MB');
            return;
        }
        
        // file validation is successful
        // we will now read the file
        
        var reader = new FileReader();
        
        // file reading started
        reader.addEventListener('loadstart', function() {
            console.log('File reading started');
        });
        
        // file reading finished successfully
        reader.addEventListener('load', function(e) {
            var text = e.target.result;
            
            // contents of the file
            console.log(text);
        });
        
        // file reading failed
        reader.addEventListener('error', function() {
            alert('Error : Failed to read file');
        });
        
        // file read progress 
        reader.addEventListener('progress', function(e) {
            if(e.lengthComputable == true) {
                var percent_read = Math.floor((e.loaded/e.total)*100);
                console.log(percent_read + '% read');
            }
        });
        
        // read as text file
        reader.readAsText(file);
    });
}