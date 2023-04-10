//https://stackoverflow.com/questions/65419407/add-or-remove-row-in-input-table
//https://github.com/Hemant411/dynamic-form
//https://css-tricks.com/auto-growing-inputs-textareas/
//https://codepen.io/anon/embed/bGNJJBE/c72208b279d750f1ab46b6a45bbd04d7?default-tab=result&height=350&slug-hash=c72208b279d750f1ab46b6a45bbd04d7&theme-id=1
//add row below: https://stackoverflow.com/questions/30192423/jquery-add-row-right-below-the-selected-row
//build html elements: https://stackoverflow.com/questions/9760328/clearest-way-to-build-html-elements-in-jquery
let i = 1;

function auto_grow(element) {
    // textarea auto height
    // https://stackoverflow.com/questions/17772260/textarea-auto-height
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function insert_Lord_In_His_Holy_Temple(){
   var text =  rowTemplate_LordInHolyTemple();
   document.getElementById("The_Lord_in_His_Holy_Temple").innerHTML = text; 
}
function insert_add_del_buttons_to_html(){
   var btn_add =  rowTemplate_addButton();
   document.getElementById("insert_buttons").innerHTML = btn_add; 

}

function rowTemplate_addButton(){
        return `<select class="list" >
                <option value="choose">Add</option>
                <option value="Lord_in_holy_temple">Lord in His Holy Temple</option>
                <option value="Song" onclick="addRow() " >Song</option>
                <option value="Proclaim">Proclaim</option>
                <option value="Gebed" >Gebed</option>
                <option value="Voorbede" >Voorbede</option>
                <option value="BibleReading">BibleReading</option>
                <option value="Preach">Preach</option>
                <option value="Avondmaal">Avondmaal</option>
                <option value="Baptism">Baptism</option>
                <option value="BibleVerseThisWeek">Bible verse of the week</option>
                <option value="Welcome">Welcome Song</option>
                <option value="Report">Report</option>
                <option value="Collection">Collection</option>
                <option value="Creed">Creed</option>
                <option value="Doxology">Doxology</option>
                <option value="Onze_Vader">主禱文</option>
                <option value="GodBlessSong">May God Bless You Song</option>
                <option value="Zegen">Zegen</option>
                <option value="Final_slide">Final_slide</option>
                <option value="PDF">PDF</option>
                </select>`;

}

function rowTemplate_add_del(){
    // one row with two columns

    var btn_add =  rowTemplate_addButton();

    return `
                <div class="form-row">
                    <div class="name"></div>

                    <div class="form-column"> ${btn_add}</div>

                    <div class="form-column">
                    <input type="button" class="ibtnDel" value="Delete">
                    </div>

                </div>
    `

}
function rowTemplate_LordInHolyTemple() {
        btn_add_del = rowTemplate_add_del()
        return `<div class="form-block">
                    ${btn_add_del}
                    <div class="form-row">
                        <div class="name">Song name</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodInTemple_title_main" value="主在聖殿中">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodInTemple_title_minor" value="The Lord is in his holy temple">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Lyrics</div>
                        <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodInTemple_lyrics_main">
主在聖殿中，主在聖殿中，普天下的人，
在主面前，都應當肅靜，
肅靜，肅靜，應當肅靜。阿們。

                        </textarea>
					</div>

					    <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodInTemple_lyrics_minor">
The Lord is in his holy temple, 
The Lord is in his holy temple,
Let all the earth keep silence,
Let all the earth keep silence before him. 
Keep silence, keep silence before him. Amen.

                        </textarea>
					    </div>
				     </div>
        </div>`
}

function rowTemplate_Creed(){
        btn_add_del = rowTemplate_add_del()
        return `<div class="form-block">
                    ${btn_add_del}
                    <div class="form-row">
                        <div class="name">Creed</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="creed_title_main" value="使徒信經">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="creed_title_minor" value="Geloofsbelijdenis">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="name">Text</div>
                        <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="creed_text_cn">
我信上帝 全能的父 創造天地的主
我信我主耶穌基督 上帝的獨生子
因聖靈感孕 由童貞女馬利亞所生
在本丟比拉多手下受難

被釘於十字架 受死 埋葬 降在陰間
第三天從死人中復活 升天
坐在全能父上帝的右邊
將來必從那裡降臨 審判活人死人

我信聖靈 我信聖而公之教會
我信聖徒相通 我信罪得赦免
我信身體復活 我信永生
阿們

                        </textarea>
					    </div>

    					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="creed_text_en">
Ik geloof in God de Vader, de Almachtige, Schepper van de hemel en de aarde.
En in Jezus Christus, zijn eniggeboren Zoon, onze Here;
die ontvangen is van de Heilige Geest, geboren uit de maagd Maria;
die geleden heeft onder Pontius Pilatus,

is gekruisigd, gestorven, en begraven, neergedaald in de hel; 
op de derde dag opgestaan uit de doden; 
opgevaren naar de hemel, en zit aan de rechterhand van God de Almachtige Vader; 
vandaar zal Hij komen om te oordelen de levenden en de doden. 

Ik geloof in de Heilige Geest. 
Ik geloof een heilige, algemene, christelijke kerk, de gemeenschap der heiligen; 
vergeving van de zonden; 
opstanding van het vlees; en een eeuwig leven.

                        </textarea>
					</div>
				</div> 
                </div>
        </div>`
}

function rowTemplate_Doxology(){

    btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    
    newRow.append(`<div class="form-row">
                        <div class="name">Doxology</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_main" value="三一頌">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_minor" value="Doxology">
                        </div>
                    </div>

                    <div class = "form-row">
					    <div class="name">Lyrics</div>
					    <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_cn">
普天之下萬國萬民 
齊聲讚美父子聖靈
三位一體同榮同尊 
萬有之源萬福之本 
阿們
                        </textarea>
					    </div>

					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_en">
Praise God, from whom all blessings flow
Praise Him, all creatures here below;
Praise Him above, ye heavenly host;
Praise Father, Son, and Holy Ghost. Amen. 
                        </textarea>
					</div>
				</div>
                </div>`);
    return newRow;
}

function rowTemplate_OnzeVader(){

    btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    
    newRow.append(`<div class="form-row">
                        <div class="name">主禱文</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_main" value="主禱文">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_minor" value="Onze Vader">
                        </div>
                    </div>

                    <div class = "form-row">
					    <div class="name">Lyrics</div>
					    <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_cn">
我們在天上的父 
願人都尊祢的名為聖 願祢的國降臨
願祢的旨意行在地上 如同行在天上
我們日用的飲食 今日賜給我們
免了我們的債 如同我們免了人的債
不叫我們遇見試探 救我們脫離兇惡
因為國度 權柄 榮耀 全是祢的
直到永遠 阿們
                        </textarea>
					    </div>

					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_en">
Onze Vader die in de hemelen zijt
Uw naam worde geheiligd
Uw koninkrijk kome
Uw wil geschiede
Op aarde zoals in de hemel
Geef ons heden ons dagelijks brood
En vergeef ons onze schulden
Gelijk ook wij aan anderen vergeven
En leidt ons niet in verzoeking
Maar verlos ons van de boze
Want van U is het koninkrijk
En de kracht en de heerlijkheid
Tot in eeuwigheid
Amen
                        </textarea>
					</div>
				</div>
                </div>`);
    return newRow;
}




function rowTemplate_GodBlessSong(){

    btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    
    newRow.append(`<div class="form-row">
                        <div class="name">God Bless You Song</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_main" value="願耶和華賜福給你">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="GodBlessSong_title_minor" value="The Lord Jehovah bless all of you">
                        </div>
                    </div>

                    <div class = "form-row">
					    <div class="name">Lyrics</div>
					    <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_cn">
願耶和華賜福給你
願耶和華永遠保護你
願耶和華祂的臉光照你
願耶和華賜你平安
                        </textarea>
					    </div>

					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="GodBlessSong_lyrics_en">
The Lord Jehovah bless all of you,
the Lord Jehovah keep all of you,
the Lord Jehovah make his face shine on you,
and be gracious unto you
                        </textarea>
					</div>
				</div>
                </div>`);
    return newRow;
}


function rowTemplate_song(i) {
    // Song has three rows:
    // 1. Add/Del buttons
    // 2. Titles
    // 3. Lyrics

    var song_title_main = "祂是阳光的主宰";
    var song_title_minor = "He's the Lord of the sunshine";
    var lyrics_main = `祂是陽光的主宰
是雨水的主 
祂是歡樂的主宰
是痛苦的主`;
    var lyrics_minor = `He’s the Lord of the sunshine,
the Lord of the rain.
He’s the Lord of the good times,
the Lord of the pain.
`;

    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
                <div class="name">Song name</div>
                <div class="form-column">
                    <input class="input--style-6" type="text" name="song${i}_title_main" placeholder="${song_title_main}">
                </div>
                <div class="form-column">
                    <input class="input--style-6" type="text" name="song${i}_title_minor" placeholder="${song_title_minor}">
                </div>

                <div class="name">Lyrics</div>
                <div class="form-column">
                    <textarea class="textarea--style-6" type="text" name="song${i}_lyrics_main" oninput="auto_grow(this)" placeholder="${lyrics_main}"></textarea>
                </div>
                <div class="form-column">
                    <textarea class="textarea--style-6" type="text" name="song${i}_lyrics_minor" oninput="auto_grow(this)" placeholder="${lyrics_minor}"></textarea>
                </div>
            </div> `);
    return newRow;
}

function rowTemplate_proclaim() {

    var verse1 = "起初神创造天地。";
    var verse2 = "In the beginning God created the heavens and the earth.";

    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name">Proclaim</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="proclaim_verse_num_cn" placeholder="創世記1:1">

					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="proclaim_verse_num_en" placeholder="Genesis1:1">
					</div>

					<div class="name">Verse</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="proclaim_verse_main" placeholder = "${verse1}"></textarea>
					</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="proclaim_verse_minor" placeholder = "${verse2}"></textarea>
					</div>
				</div> `);
    return newRow;

}


function rowTemplate_BibleReading() {
    //https://css-tricks.com/auto-growing-inputs-textareas/
    //https://codepen.io/anon/embed/bGNJJBE/c72208b279d750f1ab46b6a45bbd04d7?default-tab=result&height=350&slug-hash=c72208b279d750f1ab46b6a45bbd04d7&theme-id=1

    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name">Bible Reading</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="bible_verse_num_cn" placeholder="诗篇1:1">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="bible_verse_num_en" placeholder="Psalm1:1">
					</div>

					<div class="name">Verse</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="bible_verse_main"></textarea>
					</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="bible_verse_minor"></textarea>
					</div>
				</div> `);
    return newRow;

}

function rowTemplate_TitleSlide(name, main_title, minor_title){
    // name = 'Gebed'
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >${name}</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="${name}_cn" value="${main_title}">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="${name}_en" value="${minor_title}">
					</div>

                </div>`);
    return newRow;
}


function rowTemplate_gebed(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >Gebed</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_cn" value="禱告">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_en" value="Gebed">
					</div>

                </div>`);
    return newRow;
}

function rowTemplate_Preach(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >Preach</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_cn" value="蔡達佳牧師">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_en" value="Pastor Choi">
					</div>

                </div>`);

    newRow.append( `<div class="form-row">
                <div class="name">PDF</div>
                <div class="value">
                    <div class="input-group js-input-file">
                        <input type="file" name="file_preach" id="file">
                    </div>
                    <div class="label--desc">Upload slides in pdf format. </div>
                </div>
            </div>`);
    return newRow;
}
function rowTemplate_PDF(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);

    newRow.append( `<div class="form-row">
                <div class="name">PDF</div>
                <div class="value">
                    <div class="input-group js-input-file">
                        <input type="file" name="file_PDF" id="file">
                    </div>
                    <div class="label--desc">Upload slides in pdf format. </div>
                </div>
            </div>`);
    return newRow;
}
function rowTemplate_Avondmaal(){

    var value_main =  "聖餐";
    var value_minor = "Heilig Avondmaal";

    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >Avondmaal</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_cn" value="${value_main}">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_en" value="${value_minor}">
					</div>

                </div>`);
    return newRow;
}
function rowTemplate_baptism(){

    var value_main =  "洗禮";
    var value_minor = "Baptism service";

    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >Avondmaal</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_cn" value="${value_main}">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_en" value="${value_minor}">
					</div>

                </div>`);
    return newRow;
}
function rowTemplate_BibVerseOfThisWeek(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name">Bible Verse This Week</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="BibVerseWeek_num_cn" placeholder="诗篇1:1">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="BibVerseWeek_num_en" placeholder="Psalm1:1">
					</div>

					<div class="name">Verse</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="BibVerseWeek_main"></textarea>
					</div>
					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="BibVerseWeek_minor"></textarea>
					</div>
				</div> `);
    return newRow;


}

function rowTemplate_WelcomeSong(){

    btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    
    newRow.append(`<div class="form-row">
                        <div class="name">Welcome</div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="WelcomeSong_title_main" value="歡迎歌">
                        </div>
                        <div class="form-column">
                            <input class="input--style-6" type="text" name="WelcomeSong_title_minor" value="Welkomslied">
                        </div>
                    </div>

                    <div class = "form-row">
					    <div class="name">Text</div>
					    <div class="form-column">
						<textarea class="textarea--style-6" type="text" name="WelcomeSong_lyrics_cn">
我們歡迎你 真歡迎你
在主裏誠心歡迎 哈利路亞
我們歡迎你 真歡迎你 
在主裏誠心歡迎 
                        </textarea>
					    </div>

					<div class="form-column">
						<textarea class="textarea--style-6" type="text" name="WelcomeSong_lyrics_en">
wǒ  men  huān  yínɡ  nǐ,  zhēn  huān  yíng  nǐ
zài  zhǔ  lǐ  chénɡ  xīn  huān  yínɡ,  hā  lì  lù yà  
wǒ  men  huān  yínɡ  nǐ,  zhēn  huān  yíng  nǐ
zài  zhǔ  lǐ  chénɡ  xīn  huān  yínɡ
                        </textarea>
					</div>
				</div>
                </div>`);
    return newRow;
}




function rowTemplate_Collection(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append ( `<div class="form-row">
                <div class="name">Collection</div>
                <div class="value">
                    <div class="input-group js-input-file">
                        <input type="file" name="file_preach" id="file">
                    </div>
                    <div class="label--desc">Upload QR code in pdf format. </div>
                </div>

            </div>
            <div class="form-row">
					<div class="name">Bank account</div>
                    <div class="form-column">
                        <input class="input--style-6" type="text" name="account_name" value = "CCGN Arnhem"">   
                    </div>
                    <div class="form-column">
                        <input class="input--style-6" type="text" name="bank_account" value = "IBAN: NL48 INGB 0006 497089">
                    </div>
            </div>`);
    return newRow;
}

function rowTemplate_Report(){
    var btn_add_del = rowTemplate_add_del();
    var newRow = $("<div class=form-block>");
    newRow.append(btn_add_del);
    newRow.append( `<div class="form-row">
					<div class="name" >Report</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_cn" value="報告">
					</div>
					<div class="form-column">
						<input class="input--style-6" type="text" name="gebed_en" value="Mededelingen">
					</div>

                </div>`);
    return newRow;
}




// Press the Del button
$(".card-body").on("click", ".ibtnDel", function (event) {
    $(this).css({"color": "red", "border": "2px solid red"});
    $(this).closest(".form-block").remove();

});


// Select from the drop-down list
$(".card-body").on("change", ".list", function (event) {
    var slide_name = $(this).val();
    //alert(data);
    switch (slide_name) {
        case "Lord_in_holy_temple":
            // add a row in the html for Lord In The Holy Temple
            //$(this).parent().css({"color": "red", "border": "2px solid red"});
            newRow = rowTemplate_LordInHolyTemple();
            break;
        case "Song":
            // add a row for song
            newRow = rowTemplate_song(i);
            i++;
            break;
        case "Proclaim":
            newRow = rowTemplate_proclaim();
            break;
        case "Gebed":
            newRow = rowTemplate_TitleSlide(slide_name, '禱告','Gebed');
            break;
        case "Voorbede":
            newRow = rowTemplate_TitleSlide(slide_name, '代禱','Voorbede');
            break;
        case "BibleReading":
            newRow = rowTemplate_BibleReading();
            break;
        case "Preach":
            newRow = rowTemplate_Preach();
            break;
        case "Avondmaal":
            newRow = rowTemplate_TitleSlide(slide_name, '聖餐','Heilig Avondmaal');
            break;
        case "Baptism":
            newRow = rowTemplate_TitleSlide(slide_name, '洗禮','Baptism service');
            break;
        case "BibleVerseThisWeek":
            newRow = rowTemplate_BibVerseOfThisWeek();
            break;
        case "Welcome":
            newRow = rowTemplate_WelcomeSong();
            break;
        case "Report":
            newRow = rowTemplate_Report();
            break;
        case "Collection":
            newRow = rowTemplate_Collection();
            break;
        case "Creed":
            newRow = rowTemplate_Creed();
            break;
        case "Doxology":
            newRow = rowTemplate_Doxology();
            break;
        case "Onze_Vader":
            newRow = rowTemplate_OnzeVader();
            break;
        case "BibleVerseThisWeek":
            newRow = rowTemplate_BibVerseOfThisWeek();
            break;
        case "GodBlessSong":
            newRow = rowTemplate_GodBlessSong();
            break;
        case "Zegen":
            newRow = rowTemplate_TitleSlide(slide_name, '祝福','Zegen');
            break;
        case "PDF":
            newRow = rowTemplate_PDF();
            break;
         default:
            alert("Please choose ~ ")
            break;
    }

    $(this).closest(".form-block").after(newRow);
    
});


//$(document).ready(function(){
//  $("#Delete_row").click(function(){
//    $("p").hide();
//    alert("Hello! I am an alert box!!");
//    console.log('hide p');
//  });
//});



