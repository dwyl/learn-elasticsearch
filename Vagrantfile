# detailed instructions for installing
$script = <<SCRIPT

# https://github.com/joyent/node/wiki/installing-node.js-via-package-manager
sudo add-apt-repository ppa:chris-lea/node.js

# update ubuntu (security etc.)
apt-get update

sudo apt-get -y install g++ git git-core nodejs

## Uncomment the following lines to test everything is working:
# git clone https://github.com/nelsonic/ac.git && cd ac
# npm instal
# npm start

SCRIPT


Vagrant.configure("2") do |config|

  # config.vm.box = "base"
  config.vm.box = "ubuntu-nodejs-server"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: "192.168.33.10"
  config.vm.provision :shell, :inline => $script

end
