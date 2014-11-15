require('shelljs/global');

exports.exec_command = function(cmd){
	// Run external tool synchronously
	if (exec(cmd).code !== 0) {
	  echo('Error: ' + cmd + ' execute failed');
	  exit(1);
	}else{
		echo('Success: ' + cmd + ' execute success');
	}
}

