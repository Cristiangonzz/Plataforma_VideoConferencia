'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">video-conferencia documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CuentaModule.html" data-type="entity-link" >CuentaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' : 'data-target="#xs-controllers-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' :
                                            'id="xs-controllers-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' }>
                                            <li class="link">
                                                <a href="controllers/AudioConferenciaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioConferenciaController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/EventoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/VideoConferenciaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoConferenciaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' : 'data-target="#xs-injectables-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' :
                                        'id="xs-injectables-links-module-CuentaModule-8c1f9778ed990c2e4e672d30859df2ec90a02f4c5a61dfdab17e7e43a1c0d87bcc41861f40c87f37b322de69c9fd6ffb03d8668ee64bf573a0f56c34ee4f1964"' }>
                                        <li class="link">
                                            <a href="injectables/AudioConferenciaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioConferenciaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VideoConferenciaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoConferenciaRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MensajeriaModule.html" data-type="entity-link" >MensajeriaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MensajeriaModule-aa6e391beb1749f67edb05448e32f047d9f0efadb02ab808ecd1011ac19668bc11aaa65125e2243a42843b631e82efc5035d12ba5563f8b7868f4e68957165a2"' : 'data-target="#xs-injectables-links-module-MensajeriaModule-aa6e391beb1749f67edb05448e32f047d9f0efadb02ab808ecd1011ac19668bc11aaa65125e2243a42843b631e82efc5035d12ba5563f8b7868f4e68957165a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MensajeriaModule-aa6e391beb1749f67edb05448e32f047d9f0efadb02ab808ecd1011ac19668bc11aaa65125e2243a42843b631e82efc5035d12ba5563f8b7868f4e68957165a2"' :
                                        'id="xs-injectables-links-module-MensajeriaModule-aa6e391beb1749f67edb05448e32f047d9f0efadb02ab808ecd1011ac19668bc11aaa65125e2243a42843b631e82efc5035d12ba5563f8b7868f4e68957165a2"' }>
                                        <li class="link">
                                            <a href="injectables/EmpresaBuscadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaBuscadaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmpresaRegistradaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaRegistradaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaBuscadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaBuscadaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaEditadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaEditadaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaEliminadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaEliminadaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaRegistradaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaRegistradaPublisher</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MensajeriaModuleCuenta.html" data-type="entity-link" >MensajeriaModuleCuenta</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MensajeriaModuleCuenta-9caeb24be45d21a520c4495a27d35db21aae6cf97cb9ddcad490b1c3d1a35e538cbaf4a2fdabec87228291e481f06aa273897e31a2b8c6df0cc22bbb64fe5ffa"' : 'data-target="#xs-injectables-links-module-MensajeriaModuleCuenta-9caeb24be45d21a520c4495a27d35db21aae6cf97cb9ddcad490b1c3d1a35e538cbaf4a2fdabec87228291e481f06aa273897e31a2b8c6df0cc22bbb64fe5ffa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MensajeriaModuleCuenta-9caeb24be45d21a520c4495a27d35db21aae6cf97cb9ddcad490b1c3d1a35e538cbaf4a2fdabec87228291e481f06aa273897e31a2b8c6df0cc22bbb64fe5ffa"' :
                                        'id="xs-injectables-links-module-MensajeriaModuleCuenta-9caeb24be45d21a520c4495a27d35db21aae6cf97cb9ddcad490b1c3d1a35e538cbaf4a2fdabec87228291e481f06aa273897e31a2b8c6df0cc22bbb64fe5ffa"' }>
                                        <li class="link">
                                            <a href="injectables/AudioConferenciaCreadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioConferenciaCreadaPublisher</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VideoConferenciaCreadaPublisher.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoConferenciaCreadaPublisher</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModule.html" data-type="entity-link" >MongoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoModule-06762709135e4d682a4f5eb3d72819eb9e7d5379617ab78957567704a8b0fc213cfb041f4a279c29f3fb88609b0ad14279521fdd32980fd883289ef9d225a6bf"' : 'data-target="#xs-injectables-links-module-MongoModule-06762709135e4d682a4f5eb3d72819eb9e7d5379617ab78957567704a8b0fc213cfb041f4a279c29f3fb88609b0ad14279521fdd32980fd883289ef9d225a6bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoModule-06762709135e4d682a4f5eb3d72819eb9e7d5379617ab78957567704a8b0fc213cfb041f4a279c29f3fb88609b0ad14279521fdd32980fd883289ef9d225a6bf"' :
                                        'id="xs-injectables-links-module-MongoModule-06762709135e4d682a4f5eb3d72819eb9e7d5379617ab78957567704a8b0fc213cfb041f4a279c29f3fb88609b0ad14279521fdd32980fd883289ef9d225a6bf"' }>
                                        <li class="link">
                                            <a href="injectables/EmpresaMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmpresaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongooseConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongooseConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModuleCuenta.html" data-type="entity-link" >MongoModuleCuenta</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoModuleCuenta-0a8271afe1f7c68d373c5fbe3f045f9858eae9b7a9b32ed17a8d1e446b72b54610a6610cc917cccd96de778914e05d062dde133e61410de193f6dde69c523c57"' : 'data-target="#xs-injectables-links-module-MongoModuleCuenta-0a8271afe1f7c68d373c5fbe3f045f9858eae9b7a9b32ed17a8d1e446b72b54610a6610cc917cccd96de778914e05d062dde133e61410de193f6dde69c523c57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoModuleCuenta-0a8271afe1f7c68d373c5fbe3f045f9858eae9b7a9b32ed17a8d1e446b72b54610a6610cc917cccd96de778914e05d062dde133e61410de193f6dde69c523c57"' :
                                        'id="xs-injectables-links-module-MongoModuleCuenta-0a8271afe1f7c68d373c5fbe3f045f9858eae9b7a9b32ed17a8d1e446b72b54610a6610cc917cccd96de778914e05d062dde133e61410de193f6dde69c523c57"' }>
                                        <li class="link">
                                            <a href="injectables/AudioConferenciaMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioConferenciaMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AudioConferenciaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioConferenciaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongooseConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongooseConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VideoConferenciaMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoConferenciaMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VideoConferenciaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoConferenciaRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' : 'data-target="#xs-controllers-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' :
                                            'id="xs-controllers-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' }>
                                            <li class="link">
                                                <a href="controllers/EmpresaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/EventoCuentaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventoCuentaController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PersonaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' : 'data-target="#xs-injectables-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' :
                                        'id="xs-injectables-links-module-UsuarioModule-caf044a2484fd9fc70d7a6141be284e44a59d694722b2d38236eec94171050dfc1c3136cba0c4794b6a1512d4381e22c7297baa5dca9d8d6c7e525468b88a4c2"' }>
                                        <li class="link">
                                            <a href="injectables/EmpresaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmpresaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AudioConferenciaController.html" data-type="entity-link" >AudioConferenciaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmpresaController.html" data-type="entity-link" >EmpresaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventoController.html" data-type="entity-link" >EventoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventoCuentaController.html" data-type="entity-link" >EventoCuentaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PersonaController.html" data-type="entity-link" >PersonaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VideoConferenciaController.html" data-type="entity-link" >VideoConferenciaController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AudioConferenciaDomainEntity.html" data-type="entity-link" >AudioConferenciaDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AudioConferenciaSchema.html" data-type="entity-link" >AudioConferenciaSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/AudioConferenciaService.html" data-type="entity-link" >AudioConferenciaService</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuscarEmpresaUseCase.html" data-type="entity-link" >BuscarEmpresaUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuscarMail.html" data-type="entity-link" >BuscarMail</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuscarPersonaUseCase.html" data-type="entity-link" >BuscarPersonaUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrearAudioConferenciaDTO.html" data-type="entity-link" >CrearAudioConferenciaDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrearAudioConferenciaUseCase.html" data-type="entity-link" >CrearAudioConferenciaUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrearVideoConferenciaDTO.html" data-type="entity-link" >CrearVideoConferenciaDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrearVideoConferenciaUseCase.html" data-type="entity-link" >CrearVideoConferenciaUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditarPersonaoUseCase.html" data-type="entity-link" >EditarPersonaoUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/EliminarPersonaoUseCase.html" data-type="entity-link" >EliminarPersonaoUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmpresaDomainEntity.html" data-type="entity-link" >EmpresaDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmpresaSchema.html" data-type="entity-link" >EmpresaSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogearPersonaoUseCase.html" data-type="entity-link" >LogearPersonaoUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogearseDto.html" data-type="entity-link" >LogearseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MongoServerErrorExceptionFilter.html" data-type="entity-link" >MongoServerErrorExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PersonaDomainEntity.html" data-type="entity-link" >PersonaDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PersonaSchema.html" data-type="entity-link" >PersonaSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrarEmpresaDto.html" data-type="entity-link" >RegistrarEmpresaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrarEmpresaUseCase.html" data-type="entity-link" >RegistrarEmpresaUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrarPersonaDto.html" data-type="entity-link" >RegistrarPersonaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrarPersonaoUseCase.html" data-type="entity-link" >RegistrarPersonaoUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConferenciaDomainEntity.html" data-type="entity-link" >VideoConferenciaDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConferenciaSchema.html" data-type="entity-link" >VideoConferenciaSchema</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConferenciaService.html" data-type="entity-link" >VideoConferenciaService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AudioConferenciaCreadaPublisher.html" data-type="entity-link" >AudioConferenciaCreadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AudioConferenciaMongoService.html" data-type="entity-link" >AudioConferenciaMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AudioConferenciaRepository.html" data-type="entity-link" >AudioConferenciaRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaBuscadaPublisher.html" data-type="entity-link" >EmpresaBuscadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaMongoService.html" data-type="entity-link" >EmpresaMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaRegistradaPublisher.html" data-type="entity-link" >EmpresaRegistradaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaRepository.html" data-type="entity-link" >EmpresaRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaService.html" data-type="entity-link" >EmpresaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService-1.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaBuscadaPublisher.html" data-type="entity-link" >PersonaBuscadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaEditadaPublisher.html" data-type="entity-link" >PersonaEditadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaEliminadaPublisher.html" data-type="entity-link" >PersonaEliminadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaMongoService.html" data-type="entity-link" >PersonaMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaRegistradaPublisher.html" data-type="entity-link" >PersonaRegistradaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaRepository.html" data-type="entity-link" >PersonaRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonaService.html" data-type="entity-link" >PersonaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideoConferenciaCreadaPublisher.html" data-type="entity-link" >VideoConferenciaCreadaPublisher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideoConferenciaMongoService.html" data-type="entity-link" >VideoConferenciaMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideoConferenciaRepository.html" data-type="entity-link" >VideoConferenciaRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/UsuarioGuard.html" data-type="entity-link" >UsuarioGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAudioConferencia.html" data-type="entity-link" >IAudioConferencia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAudioConferenciaDomainService.html" data-type="entity-link" >IAudioConferenciaDomainService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICuentaRepository.html" data-type="entity-link" >ICuentaRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatosBasicosModel.html" data-type="entity-link" >IDatosBasicosModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmpresaCuenta.html" data-type="entity-link" >IEmpresaCuenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmpresaDomainModel.html" data-type="entity-link" >IEmpresaDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmpresaDomainService.html" data-type="entity-link" >IEmpresaDomainService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginModelDomain.html" data-type="entity-link" >ILoginModelDomain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPersonaCuenta.html" data-type="entity-link" >IPersonaCuenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPersonaDomainService.html" data-type="entity-link" >IPersonaDomainService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPersonaLogeada.html" data-type="entity-link" >IPersonaLogeada</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUsuarioRepository.html" data-type="entity-link" >IUsuarioRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVideoConferencia.html" data-type="entity-link" >IVideoConferencia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVideoConferenciaDomainService.html" data-type="entity-link" >IVideoConferenciaDomainService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});