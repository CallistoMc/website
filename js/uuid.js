$(".ign").each((index, el) => {
    let uuid = $(el).closest(".person").attr("data-uuid");

    let request = new XMLHttpRequest();
    request.onload = function() {
        let response = JSON.parse(request.responseText);
            // If error exists throw the message
            console.log(response)
            if (response.code != null) {
                throw response.msg;
            }
            $(el).html(response.username);
    };

    request.open("GET", "https://api.year4000.net/minecraft/" + uuid, true);
    request.send();
});

$(".skin").each((index, el) => {
    let uuid = $(el).attr("data-uuid");
    $(el).attr("src", "https://crafatar.com/avatars/" + uuid + "?size=45&default=MHF_Steve&overlay");
});