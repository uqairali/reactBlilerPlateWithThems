
    /// Authentication setup ///
    qz.security.setCertificatePromise(function(resolve, reject) {
       
        resolve("-----BEGIN CERTIFICATE-----\n" +
                "MIID+TCCAuGgAwIBAgIUUvK8mjSAWLASj49j6xTmLhEX7n4wDQYJKoZIhvcNAQEL\n" +
                "BQAwgYoxCzAJBgNVBAYTAlBLMRAwDgYDVQQIDAdGZWRlcmFsMRIwEAYDVQQHDAlJ\n" +
                "c2xhbWFiYWQxEDAOBgNVBAoMB0Zpa2lmb28xEDAOBgNVBAsMB0Zpa2lmb28xEDAO\n" +
                "BgNVBAMMB0Zpa2lmb28xHzAdBgkqhkiG9w0BCQEWEGNhcmVAZmlraWZvby5jb20w\n" +
                "IBcNMTgxMDI1MDcyNTA2WhgPMjA1MDA0MTkwNzI1MDZaMIGKMQswCQYDVQQGEwJQ\n" +
                "SzEQMA4GA1UECAwHRmVkZXJhbDESMBAGA1UEBwwJSXNsYW1hYmFkMRAwDgYDVQQK\n" +
                "DAdGaWtpZm9vMRAwDgYDVQQLDAdGaWtpZm9vMRAwDgYDVQQDDAdGaWtpZm9vMR8w\n" +
                "HQYJKoZIhvcNAQkBFhBjYXJlQGZpa2lmb28uY29tMIIBIjANBgkqhkiG9w0BAQEF\n" +
                "AAOCAQ8AMIIBCgKCAQEAyAODpuprCVWPo9Zn+vueIqCVNZM4uk2ccnWzzIOggifj\n" +
                "b7Z+ACh5mR6QxwjWEqbqX7UQgxxdhYsYAQ4Ea6HJK4DKmaTrpa+Bu8XtHtfE3Tta\n" +
                "3jHCXXzgY51ZeCtcm/MahrgcklkJspVvhs5ismZaybH+t7Z41HLqv+geERCLdJar\n" +
                "pKVKjrj0i47NaM5qnzpv/ZpboBmoS+gwV0mAf6I11/e+cazOnJAv8YWLjFNJVFKo\n" +
                "DbAIrDzGk3icd6E39++MdvR6LxE8p2kcvMNwQsJcTko1Oipu7SCAPRGp1WElI4mz\n" +
                "QM6PypmaeXdckaW4Bybii/kQ6JgtUD6KKhR1ikpPXwIDAQABo1MwUTAdBgNVHQ4E\n" +
                "FgQUl81WPSDxqUDmnk82O+9fQXLOIDowHwYDVR0jBBgwFoAUl81WPSDxqUDmnk82\n" +
                "O+9fQXLOIDowDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEANJR1\n" +
                "i+I0ibo281lHqTszljtt9e7bFkReiv/HWNweedv7O6BIsyJkY+McZoGiWQNZ9la7\n" +
                "fRWN8llaZ102ugS1dEMJUobA7fBI1fXlYp6WbD+OG3PBx+g58tdrZiMboTQLvCxe\n" +
                "8eiiDRzWAzmS1zUljuo1dLo9j7aFtArDQ6uomeXh8kqeTVOZIH43hpju8qYFtB9e\n" +
                "oF1OTKAOnqC5sK/vksGRljAf2VfxSXrw/y+bpkCofzLh2+xLcV8RBkg7k2y61fuK\n" +
                "bgCIIcjKp2UB8De9rJa7tI/YICsBiXr0Io0ukyaGHZbPpaJE8U/0gHCqu+W8xT0k\n" +
                "+ffu9OGb1CM/WT046A==\n" +
                "-----END CERTIFICATE-----\n");
    });


var privateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEAyAODpuprCVWPo9Zn+vueIqCVNZM4uk2ccnWzzIOggifjb7Z+\n" +
    "ACh5mR6QxwjWEqbqX7UQgxxdhYsYAQ4Ea6HJK4DKmaTrpa+Bu8XtHtfE3Tta3jHC\n" +
    "XXzgY51ZeCtcm/MahrgcklkJspVvhs5ismZaybH+t7Z41HLqv+geERCLdJarpKVK\n" +
    "jrj0i47NaM5qnzpv/ZpboBmoS+gwV0mAf6I11/e+cazOnJAv8YWLjFNJVFKoDbAI\n" +
    "rDzGk3icd6E39++MdvR6LxE8p2kcvMNwQsJcTko1Oipu7SCAPRGp1WElI4mzQM6P\n" +
    "ypmaeXdckaW4Bybii/kQ6JgtUD6KKhR1ikpPXwIDAQABAoIBAQCSeuBj0bHp+Btm\n" +
    "JZOpH7VELs6XmeYlqsk0mja/RHa8W3IZUlEc1IeZN+VXnoUIy+1Bgl1BZ/il4KQH\n" +
    "wbhDCw1FKuE1fK6HfO1KEz4BJIwsaVe2+kIaLWY4DfiEJV2BaJy4pQVnuIV9oCs5\n" +
    "UtS9SnCa3hxpdt0u2apKOTgrzy4Shyl4A09ndCThv5v2baCRG9orWW9mWiVXYMuf\n" +
    "wQqa0Tc1xpGi8XUJBFX+4G+uWgJ6rot4LQ3Sdoqy4Okz2A69d0SFfkzfsKuBT8PD\n" +
    "Dli192pPh2yxeecYU0XB8ZaMoYoqf9MMByTkFcJfiVVCQiJqlZvmtkbjs6qt5WxK\n" +
    "/GCUATtBAoGBAPPSi8aQmyH+Ha7U2AjFeFxD0VuO0kIS1h3o7n//ZA7wGasswEwZ\n" +
    "NpvIV0F36lEpmd3Oxg+gsAMTb7PuuRup4hyNdJqkxrFL4xSFWCnMWCnSCRRxIGTg\n" +
    "HcSelAbELPnUoG/gZ5GVSIHbmd1KnZfFzjp7HTNRXl5IzOqS6tudfOEnAoGBANIA\n" +
    "1zsDBqaXksxn1Tuaf01QPhKb3REWdCIsZ7SBi5D3y5opv23IkzXMw/Z+xyNd5jjq\n" +
    "9R7VCWWunIaJ4aHaxKcJuMhcEjPffDDdvH/PRl/DnHDvv6QDsikPzhbMYFFkJnyZ\n" +
    "HuWSAPLIWFG1NaFUL2GSq9/XeTmsylgt/4ffm5MJAoGAG6/i829kTl3e3QWKaqSR\n" +
    "4FhLI8x6D8q3ybmzq5FCuXeGUqvIQlvymYoMboDBeOnycP+T+h5THmZMnvAS0RNf\n" +
    "e8KMZSsk7OkjJidmNYjg0g7pvQqDlTDl8HfZc1M/kDcW6N1gpWWAUE6xkDFy59Ms\n" +
    "cfOdA0DQKIC31ENOrBWcIq0CgYA4BYdlM7JzgJ3lr5FfvCBXtJ9KgY/gvhevAh+M\n" +
    "NL7RpnkHIDn0BHzY7k4clMd09Ni0uGE5n2VJXeJdtayea+joEpzbvkwQ0H6l3pEp\n" +
    "m1bPtzQloJ+EFoRRlejJhi3vqILn3EU0wtVD7xQ4f9nVtsqJAgKdzTKGo0S7b1Hq\n" +
    "okkzWQKBgFX+VT0XnapC8ltETqz72OOXoi2rwY/wEyrgYJsUzKykE4mSAy2w+IFg\n" +
    "EbTPJUq6dMrkT11QNF++NpEW/e/Qtvv9C7R+i0At8SvgY0qd1D+2PoN3s5lpp2JK\n" +
    "GyyTEN8Laeq4o8cZMU4sYFALeoZ6toIJlgUkUnJRcGpSfjsmTY93\n" +
    "-----END RSA PRIVATE KEY-----\n";

qz.security.setSignaturePromise(function(toSign) {
    return function(resolve, reject) {
        try {
            var pk = KEYUTIL.getKey(privateKey);
            var sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
            sig.init(pk); 
            sig.updateString(toSign);
            var hex = sig.sign();
            console.log("DEBUG: \n\n" + stob64(hextorstr(hex)));
            resolve(stob64(hextorstr(hex)));
        } catch (err) {
            console.error(err);
            reject(err);
        }
    };
});


    /// Connection ///
    function launchQZ() {
        if (!qz.websocket.isActive()) {
            window.location.assign("qz:launch");
            //Retry 5 times, pausing 1 second between each attempt
            startConnection({ retries: 5, delay: 1 });
        }
    }

    function startConnection(config) {
        if (!qz.websocket.isActive()) {
            updateState('Waiting', 'default');

            qz.websocket.connect(config).then(function() {
                updateState('Active', 'success');
                findVersion();
            }).catch(handleConnectionError);
        } else {
            displayMessage('An active connection with QZ already exists.', 'alert-warning');
        }
    }

    function endConnection() {
        if (qz.websocket.isActive()) {
            qz.websocket.disconnect().then(function() {
                updateState('Inactive', 'default');
            }).catch(handleConnectionError);
        } else {
            displayMessage('No active connection with QZ exists.', 'alert-warning');
        }
    }

    function listNetworkInfo() {
        qz.websocket.getNetworkInfo().then(function(data) {
            if (data.macAddress == null) { data.macAddress = 'UNKNOWN'; }
            if (data.ipAddress == null) { data.ipAddress = "UNKNOWN"; }

            var macFormatted = '';
            for(var i = 0; i < data.macAddress.length; i++) {
                macFormatted += data.macAddress[i];
                if (i % 2 == 1 && i < data.macAddress.length - 1) {
                    macFormatted += ":";
                }
            }

            displayMessage("<strong>IP:</strong> " + data.ipAddress + "<br/><strong>Physical Address:</strong> " + macFormatted);
        }).catch(displayError);
    }


    /// Detection ///
    function findPrinter(query, set) {
        $("#printerSearch").val(query);
        qz.printers.find(query).then(function(data) {
            displayMessage("<strong>Found:</strong> " + data);
            if (set) { setPrinter(data); }
        }).catch(displayError);
    }

    function findDefaultPrinter(set) {
        qz.printers.getDefault().then(function(data) {
            displayMessage("<strong>Found:</strong> " + data);
            if (set) { setPrinter(data); }
        }).catch(displayError);
    }

    function findPrinters() {
        qz.printers.find().then(function(data) {
            var list = '';
            for(var i = 0; i < data.length; i++) {
                list += "&nbsp; " + data[i] + "<br/>";
            }

            displayMessage("<strong>Available printers:</strong><br/>" + list);
        }).catch(displayError);
    }

    /// Pixel Printers ///
    function printHTML() {
        var config = getUpdatedConfig();

        var colA = '<h2>*&nbsp; QZ Print Plugin HTML Printing &nbsp;*</h2>' +
                '<span style="color: #F00;">Version:</span> ' + qzVersion + '<br/>' +
                '<span style="color: #F00;">Visit:</span> https://qz.io/';
        var colB = '<img src="' + getPath() + '/assets/img/image_sample.png">';

        var printData = [
            {
                type: 'html',
                format: 'plain',
                data: '<html>' +
                '   <table style="font-family: monospace; border: 1px;">' +
                '       <tr style="height: 6cm;">' +
                '           <td valign="top">' + colA + '</td>' +
                '           <td valign="top">' + colB + '</td>' +
                '       </tr>' +
                '   </table>' +
                '</html>'
            }
        ];

        qz.print(config, printData).catch(displayError);
    }

    /// Page load ///
    $(document).ready(function() {
       
        startConnection();

        $("#printerSearch").on('keyup', function(e) {
            if (e.which == 13 || e.keyCode == 13) {
                findPrinter($('#printerSearch').val(), true);
                return false;
            }
        });

      
    });

    qz.websocket.setClosedCallbacks(function(evt) {
        updateState('Inactive', 'default');
        console.log(evt);

        if (evt.reason) {
            displayMessage("<strong>Connection closed:</strong> " + evt.reason, 'alert-warning');
        }
    });

    qz.websocket.setErrorCallbacks(handleConnectionError);

    /// Helpers ///
    function handleConnectionError(err) {
        updateState('Error', 'danger');

        if (err.target != undefined) {
            if (err.target.readyState >= 2) { //if CLOSING or CLOSED
                displayError("Connection to QZ Tray was closed");
            } else {
                displayError("A connection error occurred, check log for details");
                console.error(err);
            }
        } else {
            displayError(err);
        }
    }

    function displayError(err) {
        console.error(err);
  
    }


    function updateState(text, css) {
        $("#qz-status").html(text);
        $("#qz-connection").removeClass().addClass('panel panel-' + css);

        if (text === "Inactive" || text === "Error") {
            $("#launch").show();
        } else {
            $("#launch").hide();
        }
    }

   

