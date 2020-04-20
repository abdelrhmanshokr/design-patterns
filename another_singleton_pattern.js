import logger from './some_js_module_2.js';


function logFromTheSecodFile(){
    logger.log('log from the second file');
    logger.printLogCount();
}

export default logFromTheSecodFile;