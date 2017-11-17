<%@ page contentType="text/html; charset = UTF-8"%>

<html>

<head>
<script type="text/javascript" src="./res/js/common.js"></script>
<link rel="stylesheet" type="text/css" href="./res/css/common.css">
<title>Investment Advisor</title>
</head>
<body onload="configurePage()">
	<div id="divNav" class="nav-header">
		<table id="tableMenu" class="menuTable">
			<tr id="menuRow" class="menuRow">
				<td id="menuItem1" class="menuItem" onclick='loadPageForMenu("About")'>About</td>
				<td id="menuItem2" class="menuItem" onclick='loadPageForMenu("ServicesOffered")'>Services Offered</td>
				<td id="menuItem3" class="menuItem" onclick='loadPageForMenu("SIP")'>SIP</td>
				<td id="menuItem4" class="menuItem" onclick='loadPageForMenu("FinancialPlanning")'>Financial Planing</td>
				<td id="menuItem5" class="menuItem" onclick='loadPageForMenu("ContactUs")'>Contact Us</td>
			</tr>
		</table>
	</div>
	
	<div> 
	<table id='tabContainer' class="contentTable">
		<tr id="contentRow" class="contentRow"><td id="contentCol" class="contentCol">
			<div id="divContent">
				<iframe id="iContent" class="iContent" frameBorder="0" src="./res/html/About.html"></iframe>
			</div>
		</td></tr>
		<tr><td>
			<div id="divFooter" class="footer">
				AnInvestmentAdvisor, all rights reserved. Copyright &copy; 2017 
			</div>
		</td></tr>
	</table>
	</div>
</body>

</html>