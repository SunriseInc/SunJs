Vagrant.configure(2) do |config|

    config.vm.box = "Debian 8.1.0 (netinst, amd64, VBox Guest Additions 5.0.4)"
    config.vm.box_url = "https://d4aef11233712f01462b703fb2fd5e23cd527795.googledrive.com/host/0B1RAMKW3pEbqaTVFTVV0NVg4Y3M"

    config.vm.network "private_network", type: "dhcp"

    config.vm.provider "virtualbox" do |v|
        v.name = "SunJs"
        v.memory = 1024
    end

    config.vm.provision :ansible_local do |ansible|
        ansible.install        = true
        ansible.verbose        = true
        ansible.limit          = "all"
        ansible.inventory_path = "ansible/sandbox"
        ansible.playbook       = "ansible/site.yml"
    end
end
