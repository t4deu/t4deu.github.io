---
title: Detectando mudanças de orientação - React Native
categories:
  - mobile
tags:
  - react native
---

Wazuup galera, dica rápida de como detectar alterações de orientação em react native.

Precisei recentemente disto em um side project que tá no forno assando.
Encontrei duas possíveis soluções, uma simples e outra nem tanto, depende do ponto de vista:

##### Solução 1. Usar o evento `change` do Dimensions

``` javascript
import {
  Dimensions
} from 'react-native'

export default class AppScreen extends Component {
 
  componentWillMount() {
    // Adicione o listener
    Dimensions.addEventListener("change", this.dimensionsDidChange);
  }

  componentWillUnmount() {
    // LEMBRE de remover o listener
    Dimensions.removeEventListener("change",this.dimensionsDidChange);
  }

  dimensionsDidChange = (orientation) => {
    const {width, height} = Dimensions.get("window");
    const orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';
  }
}
```

##### Solução 2. Usar [react-native-orientation](https://github.com/yamill/react-native-orientation){:target="_blank"}

Vc vai precisar instalar o modulo, e talvez necessite de uma pequena configuração:

```javascript
import Orientation from 'react-native-orientation';

export default class AppScreen extends Component {
 
  componentDidMount() {
    // Adicione o listener
    Orientation.addOrientationListener(this.orientationDidChange);
  }

  componentWillUnmount() {
    // LEMBRE de remover o listener
    Orientation.removeOrientationListener(this.orientationDidChange);
  }

  orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // appreciate the landscape :)
    } else {
      // do some shit with portrait layout
    }
  },

}
```

  A primeira solução se baseia nas dimenções pra saber qual a orientação atual.
O que funciona 99% dos casos, já o 1% safadão acontece por exemplo se seu app for aberto em split-screen, onde pode acabar retornando 'portrait' quando na verdade está em 'landscape'.

Em contrapartida o módulo retorna a orientação nativa, o que dá um resultado mais preciso. Não vou entrar em detalhes sobre o módulo pq ele tá bem documentado, ai é só dar uma olhada nele.

No meu projeto como sempre escolhi a solução mais simples, pq apesar de não entregar um resultado nativo, pensando ao longo prazo o preço de adicionar um novo modulo em qualquer projeto sempre é alto em termos de manutenção.
Mas claro isto pode mudar caso seja necessário.

> Obs. o `Dimensions.addEventListener` só veio a partir do RN 0.43, se vc usa algo anterior, da um up né hahaha. Se não for possível o upgrade vc ainda pode usar a mesma solução só que no evento "onLayout" da sua View principal.