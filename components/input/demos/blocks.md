---
title: 追加内容
order: 1
---

使用`append`，`prepend`，`suffix`，`prefix`扩展点，可以往组件追加内容

```vdt
import {Input, Button, Icon} from 'kpc';

<div>
    <Input placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
    </Input>
    <br />
    <Input placeholder="please enter">
        <b:append>
            <Button icon type="none">
                <Icon class="k-icon-search" />
            </Button>
        </b:append>
    </Input>
    <br />
    <Input placeholder="please enter">
        <b:append>
            <Button icon type="primary">
                <Icon class="k-icon-search" />
            </Button>
        </b:append>
    </Input>
    <br />
    <Input placeholder="please enter">
        <b:append><Button type="primary">搜索</Button></b:append>
    </Input>
    <br />
    <Input placeholder="please enter">
        <b:prefix><Icon class="k-icon-internet" /></b:prefix>
        <b:suffix><Icon class="k-icon-search" hoverable /></b:suffix>
    </Input>
    <br />
    <Input placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
        <b:prefix><Icon class="k-icon-internet" /></b:prefix>
        <b:suffix><Icon class="k-icon-search" hoverable /></b:suffix>
    </Input>
</div>
```

```styl
.k-input
    margin 5px
```
