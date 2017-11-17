package com.aia.web;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Vivek Tripathi on 17/02/17.
 */

@Controller
@RequestMapping({"/index","/"})
public class AIAWebController{
	
	private static Logger log = Logger.getLogger(AIAWebController.class);
	
    @RequestMapping(value={"/index"}, method = RequestMethod.GET)
    public String indexClass(ModelMap modelMap){
    	log.info("Request for the main page received.");
        return "main";
    }
}
