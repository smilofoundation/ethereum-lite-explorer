(window["webpackJsonp_aleth_io_ethLite"]=window["webpackJsonp_aleth_io_ethLite"]||[]).push([[10],{"/qBf":function(e,l,t){"use strict";t.r(l);var a=t("cDcd");var n=t("lvN2");var r=t("INKD");var c=t("C4qQ");var o=t("rM+Y");var m=t("K3B6");var i=t("qT9V");var u=t("xSjD");var s=t("F9i/");var E=t("rPH3");var d=t("bYKd");var b=t("6rk5");var h=t("A2cd");var g=t("LCJi");class p extends a["Component"]{render(){let{children:e,linkTo:l}=this.props;return a["createElement"](g["a"],{colors:e=>({background:e.colors.blockColorCode,text:e.colors.blockBoxText}),linkTo:l},e)}}const k=({children:e,linkTo:l})=>a["createElement"](g["a"],{colors:e=>({background:e.colors.parentHashBoxBg,text:e.colors.parentHashBoxText}),linkTo:l},e);var x=t("i22y");var v=t("bH0W");class w extends a["Component"]{render(){return this.props.format.replace(/%d/,(new v["a"]).format(this.props.children,this.props.locale))}}const f=({bytes:e,locale:l,translations:t})=>a["createElement"](x["a"],null,a["createElement"](w,{format:"%d "+t.bytes,locale:l},e));var y=t("JM6r");var D=t("IqB2");var H=t("lJck");class B extends a["Component"]{render(){return a["createElement"](x["a"],{colors:e=>({background:e.colors.unclesBoxBg,text:e.colors.unclesBoxText,border:e.colors.unclesBoxBorder}),variant:this.props.variant},a["createElement"](H["a"],{locale:this.props.locale,value:this.props.children}))}}var T=t("Zu6a");t.d(l,"BlockDetails",function(){return V});class V extends a["PureComponent"]{render(){let{translation:e,blockDetails:l,slots:t,locale:g}=this.props;let x=a["createElement"]("div",null);x=t&&t[T["a"].ExtraData]&&l.extraData.vanity&&l.extraData.fullnodes&&l.extraData.seal&&l.extraData.commitedSeals?a["createElement"](a["Fragment"],null,a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0,autoHeight:!0},a["createElement"](c["a"],null,"Vanity"),a["createElement"](E["a"],null,l.extraData.vanity))),a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0,autoHeight:!0},a["createElement"](c["a"],null,"VALIDATORS"),l.extraData.fullnodes.map((e,l)=>a["createElement"](D["a"],{key:e},e)))),a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0,autoHeight:!0},a["createElement"](c["a"],null,"Seal"),a["createElement"](E["a"],null,l.extraData.seal))),a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0,autoHeight:!0},a["createElement"](c["a"],null,"Commited Seals"),l.extraData.commitedSeals.map((e,l)=>a["createElement"](D["a"],{key:e},e))))):a["createElement"](n["a"],null,a["createElement"](r["a"],{autoHeight:!0},a["createElement"](c["a"],null,e.get("blockView.content.extraData.label")),a["createElement"](u["a"],{data:l.extraData})));return a["createElement"](a["Fragment"],null,a["createElement"](d["a"],{useWrapper:!0},a["createElement"](n["a"],{minWidth:900},a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.blockNumber.label")),a["createElement"](b["a"],{noLink:!0},l.id)),a["createElement"](r["a"],null,l.creationTime?a["createElement"](a["Fragment"],null,a["createElement"](c["a"],null,e.get("blockView.content.blockCreationTime.label")),a["createElement"](h["a"],{timestamp:l.creationTime,translation:e,locale:g})):null,t[T["a"].Confirmations]),a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.uncles.label")),a["createElement"](B,{locale:g},l.uncles.length))),a["createElement"](n["a"],{minWidth:760},a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("general.hash")),a["createElement"](p,null,l.hash)),l.parentHash?a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.parentHash.label")),a["createElement"](k,{linkTo:void 0!==l.parentId?`page://aleth.io/block?blockNumber=${l.parentId}`:void 0},l.parentHash)):null),l.uncles.length?a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0},a["createElement"](c["a"],null,e.get("blockView.content.uncles.label")),l.uncles.map((e,t)=>a["createElement"](D["a"],{key:e,linkTo:`page://aleth.io/uncle?blockNumber=${l.id}&uncleIndex=${t}`},e)))):null,l.nonce?a["createElement"](n["a"],{minWidth:710},a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("general.nonce")),a["createElement"](E["a"],null,l.nonce)),a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.blockSize.label")),a["createElement"](f,{bytes:l.byteSize,locale:g,translations:{bytes:e.get("general.bytes")}}))):null),t[T["a"].Txs],a["createElement"](d["a"],{useWrapper:!0},a["createElement"](n["a"],{minWidth:760},l.sha3uncles?a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.sha3Uncles.label")),a["createElement"](E["a"],null,l.sha3uncles)):null),a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0},a["createElement"](c["a"],null,e.get("blockView.content.beneficiary.label")),a["createElement"](y["a"],null,l.beneficiaryAddress))),a["createElement"](n["a"],{minWidth:760},a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("general.gasLimit")),a["createElement"](o["a"],{value:l.gasLimit,locale:g})),a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("general.gasUsed")),a["createElement"](m["a"],{value:l.gasUsed,limit:l.gasLimit,locale:g}))),a["createElement"](n["a"],null,a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.difficulty.label")),a["createElement"](i["a"],{value:l.difficulty,locale:g}))),x,l.mixHash?a["createElement"](n["a"],{minWidth:760},a["createElement"](r["a"],null,a["createElement"](c["a"],null,e.get("blockView.content.mixHash.label")),a["createElement"](E["a"],null,l.mixHash))):null),a["createElement"](d["a"],{useWrapper:!0},a["createElement"](n["a"],null,a["createElement"](r["a"],{fullRow:!0,autoHeight:!0},a["createElement"](c["a"],null,e.get("blockView.content.logsBloom.label")),a["createElement"](s["a"],{data:l.logsBloom})))))}}}}]);
//# sourceMappingURL=b4b3b794d3917470f4e6.bundle.js.map