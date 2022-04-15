(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{480:function(t,s,n){"use strict";n.r(s);var a=n(23),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"使用kubernetes部署nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用kubernetes部署nginx"}},[t._v("#")]),t._v(" 使用Kubernetes部署Nginx")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("/usr/local/kubernetes/nginx")]),t._v("目录下")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deployment")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器标签的名字，发布 Service 时，selector 需要和这里对应")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.17.8\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据挂载")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" html\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/log/nginx\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nginx/conf.d\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" etc/conf.d\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nginx/nginx.conf\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("etc\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx.conf\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据卷配置")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("etc           \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config        \n         "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx.conf       \n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx.conf\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ClusterIP, NodePort, LoadBalancer")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pv配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolume\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置容量")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("capacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1Gi\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问模式")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该卷能够以读写模式被多个节点同时加载")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回收策略")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeReclaimPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Retain\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#storageClassName: nfs-storageclass-provisioner")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filesystem\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NFS 服务端配置的路径")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/kubernetes/volumes/nginx"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NFS 服务端地址")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.3.130\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pvc 配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1Gi\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#storageClassName: nfs-storageclass-provisioner")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filesystem\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configMap 配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConfigMap\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里是键值对数据")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.conf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    user  nginx;\n    worker_processes  1;")]),t._v("\n\n    error_log  /var/log/nginx/error.log warn;\n    pid        /var/run/nginx.pid;\n\n\n    events "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        worker_connections  1024;\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        include       /etc/nginx/mime.types;\n        default_type  application/octet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stream;\n\n        log_format  main  '$remote_addr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $remote_user "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$time_local"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(' "$request" \'\n                          \'$status $body_bytes_sent "$http_referer" \'\n                          \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n        access_log  /var/log/nginx/access.log  main;\n\n        sendfile        on;\n        '),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n        keepalive_timeout  65;\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n\n        include /etc/nginx/conf.d/"),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.conf;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);