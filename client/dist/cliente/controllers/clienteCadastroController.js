'use strict';var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')};(function(a){'use strict';a.module('web-patterns').controller('ClienteCadastroController',['$clienteService','ClienteModel',function(c,d){return new(function(){function _class(){_classCallCheck(this,_class);var f=this;return c.obterTodos().then(function(g){f.clientes=g}),f.cliente=new d,f.cliente.name='Juca',f.cliente.birthDate=new Date(1984,3,26),f}return _createClass(_class,[{key:'salvar',value:function salvar(f){c.salvar(f)}},{key:'carregarTodos',value:function carregarTodos(){c.obterTodos()}}]),_class}())}])})(window.angular);