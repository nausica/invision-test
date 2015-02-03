angular.module('templates.app', ['footer.tpl.html', 'header.tpl.html', 'home.tpl.html', 'message.tpl.html', 'modal.tpl.html', 'profile.tpl.html', 'settings.tpl.html']);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<div id=\"footer\" class=\"footer\">\n" +
    "	<div class=\"footer-container uppercase\">\n" +
    "		<span>about us</span>\n" +
    "		<span>support</span>\n" +
    "		<span>privacy</span>\n" +
    "		<span>terms</span>\n" +
    "		<span class=\"copyright-grey\">&copy; 2014 simplysocial</span>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"simplysocial-header\">\n" +
    "		 <div class=\"header-container clearfix\">\n" +
    "		 	<a href=\"/\">\n" +
    "				<ul class=\"nav pull-left list-unstyled brand-container\">\n" +
    "					<li class=\"pull-left brand-logo-container\">\n" +
    "						<i class=\"brand-logo icon-logo icon-green\"></i>\n" +
    "					</li>\n" +
    "					<li class=\"pull-left\">\n" +
    "						<div class=\"brand-name\">\n" +
    "							<span class=\"brand-text-dark\">simply</span><span class=\"brand-text-light\">social</span>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</a>\n" +
    "			<div class=\"nav-right pull-right\">\n" +
    "				<a href=\"#\" id=\"menu-icon\">\n" +
    "					<i class=\"icon-menu icon-green\"></i>\n" +
    "				</a>\n" +
    "				<ul class=\"nav-right-elems pull-right list-unstyled\">\n" +
    "					<li class=\"new-message-container pull-left\">\n" +
    "						<div class=\"big-icon\" ng-click='toggleModal()'>\n" +
    "							<!--<a href=\"#/message\">-->\n" +
    "								<i class=\"icon-new_message icon-green\"></i>\n" +
    "							<!--</a>-->\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				<li class=\"pull-left\">\n" +
    "					<div class=\"search-bar\">\n" +
    "						<i class=\"icon-search icon-grey\"></i>\n" +
    "						<input type=\"text\" class=\"form-control\">\n" +
    "					</div>\n" +
    "				</li>\n" +
    "				<li class=\"pull-left avatar-container\">\n" +
    "					<div class=\"pull-left user-avatar\">\n" +
    "						<img class=\"avatar\" src=\"dist/img/avatar-30x30.png\">\n" +
    "						<i class=\"icon-arrow-down icon-grey small-icon\"></i>\n" +
    "					</div>\n" +
    "					<ul class=\"dropdown-menu list-unstyled\" role=\"menu\">\n" +
    "				        <li><a href=\"/#/profile\">Profile</a></li>\n" +
    "				        <li><a href=\"/#/followers\">Followers</a></li>\n" +
    "				        <li><a href=\"/#/following\">Following</a></li>\n" +
    "				        <li><a href=\"/#/settings\">Settings</a></li>\n" +
    "				    </ul>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.tpl.html",
    "\n" +
    "<div class=\"simplysocial-banner\">\n" +
    "	<div class=\"cover-image\">\n" +
    "		<div class=\"bio\">\n" +
    "			<div class=\"banner-green-box\">\n" +
    "				<div class=\"status\">What's on your mind?</div>\n" +
    "				<div class=\"status-action pull-left\">\n" +
    "					<i class=\"icon-camera\"></i>\n" +
    "					Add Photo\n" +
    "				</div>\n" +
    "				<div class=\"status-action pull-left\">\n" +
    "					<i class=\"icon-videocam\"></i>\n" +
    "					Add Video\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"banner-nav banner-nav-home pull-left\">\n" +
    "				<span class=\"selected\">\n" +
    "					all posts\n" +
    "				</span>\n" +
    "				<span class=\"notselected\">\n" +
    "					photos\n" +
    "				</span>\n" +
    "				<span class=\"notselected\">\n" +
    "					videos\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"banner-nav-icons pull-right\">\n" +
    "				<i class=\"icon-menu\"></i>\n" +
    "				<i class=\"icon-layout\"></i>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"simplysocial-feed\">\n" +
    "	<div class=\"feed-container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"box\">\n" +
    "				<div class=\"row clearfix post-text-top\">\n" +
    "					<div class=\"avatar-container pull-left\">\n" +
    "						<img class=\"avatar\" src=\"dist/img/avatar-39x39.png\">\n" +
    "					</div>\n" +
    "					<div class=\"name-container pull-left\">\n" +
    "						<h1>Jessica Tuan</h1>\n" +
    "					</div>\n" +
    "					<div class=\"actions pull-right\">\n" +
    "						<i class=\"icon-reply\"></i>\n" +
    "						<i class=\"icon-like\"></i>\n" +
    "						<span class=\"highlight timeagolabel\">3m</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-middle\">\n" +
    "					<div class=\"avatar-container pull-left\">\n" +
    "						&nbsp;\n" +
    "					</div>\n" +
    "					<div class=\"text-container pull-left\">\n" +
    "						<h2>It's Monday. That means <span class=\"highlight\">@happymonday</span> podcast time. <span class=\"highlight\">http://bit.ly/1hxqkGO</span> Good stuff for web workers.</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-middle\">\n" +
    "					<div class=\"social icon-green\">\n" +
    "						<i class=\"icon-like\"></i> Liked\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-bottom\">\n" +
    "					<div class=\"post-media\" style=\"background-image: url('dist/img/post-image.png')\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer.tpl.html'\"></div>");
}]);

angular.module("message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("message.tpl.html",
    "<div class=\"dialog-content\">\n" +
    "	<div class=\"header\">\n" +
    "		Create a new message\n" +
    "	</div>\n" +
    "	<div class=\"message-wrapper\">\n" +
    "		<textarea class=\"message\" name=\"message\"></textarea>\n" +
    "	</div>\n" +
    "	<div class=\"actions-wrapper\">\n" +
    "    	<div class=\"status-action pull-left\">\n" +
    "			<i class=\"icon-camera\"></i>\n" +
    "				Add Photo\n" +
    "		</div>\n" +
    "		<div class=\"status-action pull-left\">\n" +
    "			<i class=\"icon-videocam\"></i>\n" +
    "				Add Video\n" +
    "		</div>\n" +
    "		<div class=\"save-wrapper pull-right\">\n" +
    "			<button class=\"btn btn-save\">Post</button>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal.tpl.html",
    "<div class='ng-modal' ng-show='show'>\n" +
    "	<div class='ng-modal-overlay' ng-click='hideModal()'></div>\n" +
    "	<div class='ng-modal-dialog' ng-style='dialogStyle'>\n" +
    "		<div class='ng-modal-close' ng-click='hideModal()'>X</div>\n" +
    "		<div class='ng-modal-dialog-content' ng-transclude></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "	");
}]);

angular.module("profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile.tpl.html",
    "\n" +
    "<div class=\"simplysocial-banner\">\n" +
    "	<div class=\"cover-image\">\n" +
    "		<div class=\"bio\">\n" +
    "			<div class=\"bio-content\">\n" +
    "				<img class=\"avatar\" src=\"dist/img/avatar-85x85.png\">\n" +
    "				<h1>Jessica Tuan</h1>\n" +
    "				<h2>Designer Developer living in SanDiego, CA</h2>\n" +
    "				<h3 class=\"bio-email-grey\">jessicatuan.com</h3>\n" +
    "			</div>\n" +
    "			<div class=\"banner-nav\">\n" +
    "				<span class=\"selected\">\n" +
    "					jessica's feed\n" +
    "				</span>\n" +
    "				<span class=\"notselected\">\n" +
    "					2,542 followers\n" +
    "				</span>\n" +
    "				<span class=\"notselected\">\n" +
    "					517 following\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"simplysocial-feed\">\n" +
    "	<div class=\"feed-container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"box\">\n" +
    "				<div class=\"row clearfix post-text-top\">\n" +
    "					<div class=\"avatar-container pull-left\">\n" +
    "						<img class=\"avatar\" src=\"dist/img/avatar-39x39.png\">\n" +
    "					</div>\n" +
    "					<div class=\"name-container pull-left\">\n" +
    "						<h1>Jessica Tuan</h1>\n" +
    "					</div>\n" +
    "					<div class=\"actions pull-right\">\n" +
    "						<i class=\"icon-reply\"></i>\n" +
    "						<i class=\"icon-like\"></i>\n" +
    "						<span class=\"highlight timeagolabel\">3m</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-middle\">\n" +
    "					<div class=\"avatar-container pull-left\">\n" +
    "						&nbsp;\n" +
    "					</div>\n" +
    "					<div class=\"text-container pull-left\">\n" +
    "						<h2>It's Monday. That means <span class=\"highlight\">@happymonday</span> podcast time. <span class=\"highlight\">http://bit.ly/1hxqkGO</span> Good stuff for web workers.</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-middle\">\n" +
    "					<div class=\"social icon-green\">\n" +
    "						<i class=\"icon-like\"></i> Liked\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row clearfix post-text-bottom\">\n" +
    "					<div class=\"post-media\" style=\"background-image: url('dist/img/post-image.png')\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'footer.tpl.html'\"></div>");
}]);

angular.module("settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("settings.tpl.html",
    "<div class=\"simplysocial-settings\">\n" +
    "	<div class=\"container\">\n" +
    "		<h1>\n" +
    "			Settings\n" +
    "		</h1>\n" +
    "		<div class=\"account-section\">\n" +
    "			<h2>\n" +
    "				Account\n" +
    "			</h2>\n" +
    "\n" +
    "			<div class=\"row clearfix post-text-top\">\n" +
    "					<div class=\"pull-left\">\n" +
    "						<div>\n" +
    "							<img class=\"avatar\" src=\"dist/img/avatar-85x85.png\">\n" +
    "						</div>\n" +
    "						<div>\n" +
    "							<button class=\"btn btn-small btn-change\">change</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"pull-left\">\n" +
    "						<div class=\"field\">\n" +
    "							<i class=\"icon-user icon-light-grey\"></i>\n" +
    "							<input type=\"text\" class=\"\" value=\"Jessica Tuan\">\n" +
    "						</div>\n" +
    "						<div class=\"field\">\n" +
    "							<i class=\"icon-email icon-light-grey\"></i>\n" +
    "							<input type=\"text\" class=\"\" value=\"jessica@mail.com\">\n" +
    "						</div>\n" +
    "						<div class=\"field\">\n" +
    "							<i class=\"icon-lock icon-light-grey\"></i>\n" +
    "							<input type=\"password\" class=\"\" value=\"password\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"notifications-section\">\n" +
    "			<h2>\n" +
    "				Notifications\n" +
    "			</h2>\n" +
    "			<ul class=\"notifications-list list-unstyled\">\n" +
    "				<li>\n" +
    "					<label class=\"switch\">\n" +
    "						<input type=\"checkbox\" checked>\n" +
    "						<i></i>\n" +
    "						<span>email me when my posts are marked as favorites</span>\n" +
    "					</label>	\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<label class=\"switch\">\n" +
    "						<input type=\"checkbox\" checked>\n" +
    "						<i></i>\n" +
    "						<span>email me when I'm mentioned</span>\n" +
    "					</label>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<label class=\"switch\">\n" +
    "						<input type=\"checkbox\" checked>\n" +
    "						<i></i>\n" +
    "						<span>email me when I get I reply</span>\n" +
    "					</label>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<label class=\"switch\">\n" +
    "						<input type=\"checkbox\" checked>\n" +
    "						<i></i>\n" +
    "						<span>email me when someone follows me</span>\n" +
    "					</label>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"privacy-section\">\n" +
    "			<h2>\n" +
    "				Privacy\n" +
    "			</h2>\n" +
    "			\n" +
    "			<ul class=\"privacy-radio-list radio list-unstyled\">\n" +
    "				<li>\n" +
    "					<input id=\"allowany\" name=\"allowtag\" value=\"allowany\" type=\"radio\" checked>\n" +
    "					<label for=\"allowany\">allow anyone to tag me</label>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<input id=\"allowfollow\" name=\"allowtag\" value=\"allowfollow\" type=\"radio\">\n" +
    "					<label for=\"allowfollow\">only allow people I follow to tag me</label>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<input id=\"donotallow\" name=\"allowtag\" value=\"donotallow\" type=\"radio\">\n" +
    "					<label for=\"donotallow\">don't allow anyone to tag me</label>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "\n" +
    "			<ul class=\"privacy-checkbox-list checkbox list-unstyled\">\n" +
    "				<li>\n" +
    "					<input id=\"addlocation\" name=\"addlocation\" type=\"checkbox\">\n" +
    "					<label for=\"addlocation\">add a location to my posts</label>\n" +
    "				</li>\n" +
    "				\n" +
    "				<li>\n" +
    "					<input id=\"emailvisible\" name=\"emailvisible\" type=\"checkbox\">\n" +
    "					<label for=\"emailvisible\">let others find me by my email address</label>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<input id=\"tailorads\" name=\"tailorads\" type=\"checkbox\">\n" +
    "					<label for=\"tailorads\">tailor ads based on my information</label>\n" +
    "					\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"save-changes\">\n" +
    "			<button class=\"btn btn-save\">Save Changes</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
