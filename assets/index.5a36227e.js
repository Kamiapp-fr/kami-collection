import"./vendor.981edf70.js";import{K as p}from"./kami-component.5387cbae.js";var a=(n=>(n.ASC="asc",n.DESC="desc",n))(a||{});class o extends p{static get observedAttributes(){return["search","sort","order"]}static get tag(){return"kami-searchbar"}get sort(){return this.wrapper.querySelector("#sort")}get search(){return this.wrapper.querySelector("#search")}constructor(){super();this.sortEvent=this.updateSortEvent(),this.searchEvent=this.updateSearchEvent()}setProperties(){this.props=this.observe({sortIcone:"arrow_drop_down",order:this.getAttribute("order"),sort:this.getAttribute("sort")||"id",search:this.getAttribute("search")||"name"})}connectedCallback(){this.initSort()}initEventListener(){this.sortEvent=this.updateSortEvent(),this.searchEvent=this.updateSearchEvent(),this.sort.addEventListener("click",t=>{t.preventDefault(),this.toggleSort()}),this.search.addEventListener("keypress",t=>{t.key==="Enter"&&(this.props.search=this.search.value,this.dispatchEvent(this.searchEvent))})}updateSortEvent(){return new CustomEvent("sort",{detail:{order:this.props.order,sort:this.props.sort}})}updateSearchEvent(){return new CustomEvent("search",{detail:{search:this.props.search}})}initSort(){return this.props.order===a.ASC?this.props.sortIcone="arrow-drop-down":this.props.sortIcone="arrow-drop-up",this}toggleSort(){return this.props.order===a.ASC?(this.props.order=a.DESC,this.props.sortIcone="arrow-drop-up"):(this.props.order=a.ASC,this.props.sortIcone="arrow-drop-down"),this.dispatchEvent(this.sortEvent),this}renderHtml(){return`
            <div class="searchbar">
                <iron-icon icon="search"></iron-icon>  
                <input 
                    value="${this.props.search}" 
                    id="search" 
                    class="searchbar__input ${this.props.search?"searchbar__input--insearch":""}" 
                    type="text" 
                    placeholder="Search"
                >
                <div id="sort" class="searchbar__sort">
                    <iron-icon icon="${this.props.sortIcone}"></iron-icon>    
                </div>
            </div>
        `}renderStyle(){return`

            iron-icon{
                color: #8080809e;
            }

            .searchbar{
                padding: 10px;
                display: flex;
                margin: 0px 0px 7px 0px;
                justify-content: space-between;
                border-radius: 5px;
                box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
                align-items: center;
            }
  
            .searchbar__input{
                flex-grow: 1;
                border-radius: 2px;
                margin: 0 10px;
                border: none;
                padding: 10px;
            }
            
            .searchbar__input--insearch{
                background-color: #80808014;
            }

            .searchbar__sort{
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

        `}}class l extends p{static get observedAttributes(){return["datasource","delegate","width","height","useSearch","searchQuery","sortQuery","orderQuery","sort","page","limit","flex","nested"]}static get tag(){return"kami-infinitelist"}constructor(){super();this.components=[],this.inLoad=!1,this.end=!1,this.componentAttributes=[],this.index=0,this.clickElement=null,this.clickElementEvent=this.updateClickElementEvent(this.index)}setProperties(){const t=this.getAttribute("datasource"),e=this.getAttribute("delegate");if(t&&e)this.props=this.observe({datasource:t,delegate:e,width:this.getAttribute("width")||"100%",height:this.getAttribute("height")||"100vh",useSearch:this.toBoolean(this.getAttribute("useSearch"))||!1,searchQuery:this.getAttribute("searchQuery")||"search",sortQuery:this.getAttribute("sortQuery")||"sort",orderQuery:this.getAttribute("orderQuery")||"order",pageQuery:this.getAttribute("pageQuery")||"page",limitQuery:this.getAttribute("limitQuery")||"limit",sort:this.getAttribute("sort")||"id",page:parseInt(this.getAttribute("page"),10)||1,flex:this.toBoolean(this.getAttribute("flex"))||!1,nested:this.getAttribute("nested"),query:{}});else throw new Error("You need a datasource and delegate !");this.props.query[this.props.pageQuery]=this.props.page,this.props.query[this.props.limitQuery]=this.getAttribute("limit")||"10",this.props.useSearch&&(this.getUrlParam(this.props.searchQuery)&&(this.props.query[this.props.searchQuery]=this.getUrlParam(this.props.searchQuery)),this.props.query[this.props.sortQuery]=this.props.sort,this.props.query[this.props.orderQuery]=this.getUrlParam(this.props.orderQuery))}connectedCallback(){this.container=this.wrapper.querySelector(".infinitelist"),this.component=this.querySelector(this.props.delegate).cloneNode(),this.componentAttributes=this.getAttributes(this.component),this.getData(),this.container.addEventListener("scroll",()=>{Math.round(this.container.scrollTop+20)>this.container.scrollHeight-this.container.offsetHeight&&!this.inLoad&&!this.end&&(this.props.query[this.props.pageQuery]+=1,this.inLoad=!0,this.getData())}),this.props.useSearch&&(this.wrapper.querySelector(o.tag).addEventListener("sort",t=>{this.props.query[this.props.orderQuery]=t.detail.order,this.props.query[this.props.sortQuery]=t.detail.sort,this.updateData(this.props.orderQuery,t.detail.order),this.updateData(this.props.sortQuery,t.detail.sort)}),this.wrapper.querySelector(o.tag).addEventListener("search",t=>{this.props.query[this.props.searchQuery]=t.detail.search,this.updateData(this.props.searchQuery,t.detail.search)}))}generateRequest(){try{let t;try{t=new URL(this.props.datasource)}catch{t=new URL(`${window.location.origin}${this.props.datasource}`)}Object.keys(this.props.query).forEach(r=>{t.searchParams.append(r,this.props.query[r])});const e=t.toString();return new Request(e)}catch{throw new Error("Invalid datasource !")}}getData(){const t=this.generateRequest();return this.inLoad=!0,fetch(t).then(e=>e.json()).then(e=>{if(e&&this.props.nested&&(e=e[this.props.nested]),Array.isArray(e)){e.length!==parseInt(this.props.query[this.props.limitQuery],10)&&(this.end=!0);for(this.data in e){const i=e[this.data];if(i instanceof Object&&!Array.isArray(i)){const r=this.component.cloneNode();this.componentAttributes.forEach(s=>{const h=this.convertData(i,r.getAttribute(s.toString()));s!=="slots"?r.setAttribute(s,h):r.innerHTML=h}),this.components.push(r),r.setAttribute("index",this.index),this.index+=1,r.addEventListener("click",()=>{this.clickedEvent(r,parseInt(r.getAttribute("index"),10))}),this.addComponent(r)}else throw new Error("Data should be an array of object !")}}else throw new Error("Data should be an array of object !");this.inLoad=!1}),this}updateData(t,e){return this.setUrlParam(t,e).resetList().getData(),this}resetList(){return this.components=[],this.container.innerHTML="",this.props.query.page=this.props.page,this.end=!1,this}clickedEvent(t,e){return this.clickElement=t,this.clickElementEvent=this.updateClickElementEvent(e),this.dispatchEvent(this.clickElementEvent),this}updateClickElementEvent(t){return new CustomEvent("clickElement",{detail:{element:this.clickElement,index:t}})}convertData(t,e,i="."){let s=(Array.isArray(e)?e:e.split(i)).reduce((h,c)=>h&&h[c],t);return Array.isArray(s)&&(s=JSON.stringify(s)),s}addComponent(t){return this.container.append(t),this}getAttributes(t){const e=t.attributes,i=e.length,r=[];for(let s=0;s<i;s+=1)r.push(e[s].nodeName);return r}renderSearch(){return`
            <${o.tag}
                search="${this.getUrlParam(this.props.searchQuery)||""}"
                sort=${this.props.sort||""}
                order="${this.getUrlParam(this.props.orderQuery)||a.ASC}"
            >
            </${o.tag}>
        `}renderHtml(){return`
            ${this.props.useSearch?this.renderSearch():""}
            <div class="infinitelist ${this.props.flex?"infinitelist--flex":""}"></div>
        `}renderStyle(){return`
            .infinitelist{
                width: ${this.props.width};
                height : ${this.props.height};
                overflow-y: scroll;
            }

            .infinitelist--flex{
                display: flex;
                justify-content: start;
                align-items: center;
                flex-wrap: wrap;
                align-content: start;
            }
        `}}customElements.get(o.tag)||customElements.define(o.tag,o);export{l as K};
