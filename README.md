cocoapods-cli
=============

因为cocoapods速度问题，不知道浪费了多少时间了！

用的最多的 pod install ,pod update 每次都要升级cocoapods的spec仓库，在命令执行时添加参数可以略过此步。

珍爱生命吧！

## Install

	sudo npm install -g cocoapods-cli
 
## Commands

### podi

	pod install --verbose --no-repo-update

### podu

	pod update --verbose --no-repo-update
	

### podc

	rm -rf ~/Library/Developer/Xcode
	
http://stackoverflow.com/questions/19391768/file-has-been-modified-since-the-precompiled-header-was-built

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
